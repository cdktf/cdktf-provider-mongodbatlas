# `cloudBackupSnapshotExportJob` Submodule <a name="`cloudBackupSnapshotExportJob` Submodule" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBackupSnapshotExportJob <a name="CloudBackupSnapshotExportJob" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job mongodbatlas_cloud_backup_snapshot_export_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer"></a>

```typescript
import { cloudBackupSnapshotExportJob } from '@cdktf/provider-mongodbatlas'

new cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob(scope: Construct, id: string, config: CloudBackupSnapshotExportJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig">CloudBackupSnapshotExportJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig">CloudBackupSnapshotExportJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.putCustomData">putCustomData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomData` <a name="putCustomData" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.putCustomData"></a>

```typescript
public putCustomData(value: IResolvable | CloudBackupSnapshotExportJobCustomData[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.putCustomData.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudBackupSnapshotExportJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isConstruct"></a>

```typescript
import { cloudBackupSnapshotExportJob } from '@cdktf/provider-mongodbatlas'

cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformElement"></a>

```typescript
import { cloudBackupSnapshotExportJob } from '@cdktf/provider-mongodbatlas'

cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformResource"></a>

```typescript
import { cloudBackupSnapshotExportJob } from '@cdktf/provider-mongodbatlas'

cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.generateConfigForImport"></a>

```typescript
import { cloudBackupSnapshotExportJob } from '@cdktf/provider-mongodbatlas'

cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudBackupSnapshotExportJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudBackupSnapshotExportJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudBackupSnapshotExportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudBackupSnapshotExportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.components">components</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList">CloudBackupSnapshotExportJobComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.customData">customData</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList">CloudBackupSnapshotExportJobCustomDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.errMsg">errMsg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportJobId">exportJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportStatusExportedCollections">exportStatusExportedCollections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportStatusTotalCollections">exportStatusTotalCollections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.finishedAt">finishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.customDataInput">customDataInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportBucketIdInput">exportBucketIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportBucketId">exportBucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.components"></a>

```typescript
public readonly components: CloudBackupSnapshotExportJobComponentsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList">CloudBackupSnapshotExportJobComponentsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.customData"></a>

```typescript
public readonly customData: CloudBackupSnapshotExportJobCustomDataList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList">CloudBackupSnapshotExportJobCustomDataList</a>

---

##### `errMsg`<sup>Required</sup> <a name="errMsg" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.errMsg"></a>

```typescript
public readonly errMsg: string;
```

- *Type:* string

---

##### `exportJobId`<sup>Required</sup> <a name="exportJobId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportJobId"></a>

```typescript
public readonly exportJobId: string;
```

- *Type:* string

---

##### `exportStatusExportedCollections`<sup>Required</sup> <a name="exportStatusExportedCollections" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportStatusExportedCollections"></a>

```typescript
public readonly exportStatusExportedCollections: number;
```

- *Type:* number

---

##### `exportStatusTotalCollections`<sup>Required</sup> <a name="exportStatusTotalCollections" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportStatusTotalCollections"></a>

```typescript
public readonly exportStatusTotalCollections: number;
```

- *Type:* number

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.finishedAt"></a>

```typescript
public readonly finishedAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.customDataInput"></a>

```typescript
public readonly customDataInput: IResolvable | CloudBackupSnapshotExportJobCustomData[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>[]

---

##### `exportBucketIdInput`<sup>Optional</sup> <a name="exportBucketIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportBucketIdInput"></a>

```typescript
public readonly exportBucketIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `exportBucketId`<sup>Required</sup> <a name="exportBucketId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.exportBucketId"></a>

```typescript
public readonly exportBucketId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBackupSnapshotExportJobComponents <a name="CloudBackupSnapshotExportJobComponents" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponents.Initializer"></a>

```typescript
import { cloudBackupSnapshotExportJob } from '@cdktf/provider-mongodbatlas'

const cloudBackupSnapshotExportJobComponents: cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponents = { ... }
```


### CloudBackupSnapshotExportJobConfig <a name="CloudBackupSnapshotExportJobConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.Initializer"></a>

```typescript
import { cloudBackupSnapshotExportJob } from '@cdktf/provider-mongodbatlas'

const cloudBackupSnapshotExportJobConfig: cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#cluster_name CloudBackupSnapshotExportJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.customData">customData</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>[]</code> | custom_data block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.exportBucketId">exportBucketId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#export_bucket_id CloudBackupSnapshotExportJob#export_bucket_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#project_id CloudBackupSnapshotExportJob#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#snapshot_id CloudBackupSnapshotExportJob#snapshot_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#cluster_name CloudBackupSnapshotExportJob#cluster_name}.

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.customData"></a>

```typescript
public readonly customData: IResolvable | CloudBackupSnapshotExportJobCustomData[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>[]

custom_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#custom_data CloudBackupSnapshotExportJob#custom_data}

---

##### `exportBucketId`<sup>Required</sup> <a name="exportBucketId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.exportBucketId"></a>

```typescript
public readonly exportBucketId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#export_bucket_id CloudBackupSnapshotExportJob#export_bucket_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#project_id CloudBackupSnapshotExportJob#project_id}.

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobConfig.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#snapshot_id CloudBackupSnapshotExportJob#snapshot_id}.

---

### CloudBackupSnapshotExportJobCustomData <a name="CloudBackupSnapshotExportJobCustomData" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData.Initializer"></a>

```typescript
import { cloudBackupSnapshotExportJob } from '@cdktf/provider-mongodbatlas'

const cloudBackupSnapshotExportJobCustomData: cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#key CloudBackupSnapshotExportJob#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#value CloudBackupSnapshotExportJob#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#key CloudBackupSnapshotExportJob#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/cloud_backup_snapshot_export_job#value CloudBackupSnapshotExportJob#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBackupSnapshotExportJobComponentsList <a name="CloudBackupSnapshotExportJobComponentsList" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer"></a>

```typescript
import { cloudBackupSnapshotExportJob } from '@cdktf/provider-mongodbatlas'

new cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.get"></a>

```typescript
public get(index: number): CloudBackupSnapshotExportJobComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudBackupSnapshotExportJobComponentsOutputReference <a name="CloudBackupSnapshotExportJobComponentsOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer"></a>

```typescript
import { cloudBackupSnapshotExportJob } from '@cdktf/provider-mongodbatlas'

new cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.exportId">exportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.replicaSetName">replicaSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponents">CloudBackupSnapshotExportJobComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportId`<sup>Required</sup> <a name="exportId" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.exportId"></a>

```typescript
public readonly exportId: string;
```

- *Type:* string

---

##### `replicaSetName`<sup>Required</sup> <a name="replicaSetName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.replicaSetName"></a>

```typescript
public readonly replicaSetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudBackupSnapshotExportJobComponents;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobComponents">CloudBackupSnapshotExportJobComponents</a>

---


### CloudBackupSnapshotExportJobCustomDataList <a name="CloudBackupSnapshotExportJobCustomDataList" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer"></a>

```typescript
import { cloudBackupSnapshotExportJob } from '@cdktf/provider-mongodbatlas'

new cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.get"></a>

```typescript
public get(index: number): CloudBackupSnapshotExportJobCustomDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBackupSnapshotExportJobCustomData[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>[]

---


### CloudBackupSnapshotExportJobCustomDataOutputReference <a name="CloudBackupSnapshotExportJobCustomDataOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer"></a>

```typescript
import { cloudBackupSnapshotExportJob } from '@cdktf/provider-mongodbatlas'

new cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBackupSnapshotExportJobCustomData;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.cloudBackupSnapshotExportJob.CloudBackupSnapshotExportJobCustomData">CloudBackupSnapshotExportJobCustomData</a>

---



