# `onlineArchive` Submodule <a name="`onlineArchive` Submodule" id="@cdktf/provider-mongodbatlas.onlineArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnlineArchive <a name="OnlineArchive" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive mongodbatlas_online_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

new onlineArchive.OnlineArchive(scope: Construct, id: string, config: OnlineArchiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig">OnlineArchiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig">OnlineArchiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataExpirationRule">putDataExpirationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataProcessRegion">putDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putPartitionFields">putPartitionFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetCollectionType">resetCollectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetDataExpirationRule">resetDataExpirationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetDataProcessRegion">resetDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPartitionFields">resetPartitionFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSyncCreation">resetSyncCreation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCriteria` <a name="putCriteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria"></a>

```typescript
public putCriteria(value: OnlineArchiveCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

---

##### `putDataExpirationRule` <a name="putDataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataExpirationRule"></a>

```typescript
public putDataExpirationRule(value: OnlineArchiveDataExpirationRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataExpirationRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a>

---

##### `putDataProcessRegion` <a name="putDataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataProcessRegion"></a>

```typescript
public putDataProcessRegion(value: OnlineArchiveDataProcessRegion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putDataProcessRegion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a>

---

##### `putPartitionFields` <a name="putPartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putPartitionFields"></a>

```typescript
public putPartitionFields(value: IResolvable | OnlineArchivePartitionFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putPartitionFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>[]

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule"></a>

```typescript
public putSchedule(value: OnlineArchiveSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

---

##### `resetCollectionType` <a name="resetCollectionType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetCollectionType"></a>

```typescript
public resetCollectionType(): void
```

##### `resetDataExpirationRule` <a name="resetDataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetDataExpirationRule"></a>

```typescript
public resetDataExpirationRule(): void
```

##### `resetDataProcessRegion` <a name="resetDataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetDataProcessRegion"></a>

```typescript
public resetDataProcessRegion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPartitionFields` <a name="resetPartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPartitionFields"></a>

```typescript
public resetPartitionFields(): void
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPaused"></a>

```typescript
public resetPaused(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetSyncCreation` <a name="resetSyncCreation" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSyncCreation"></a>

```typescript
public resetSyncCreation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OnlineArchive resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isConstruct"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

onlineArchive.OnlineArchive.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformElement"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

onlineArchive.OnlineArchive.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformResource"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

onlineArchive.OnlineArchive.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

onlineArchive.OnlineArchive.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OnlineArchive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OnlineArchive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OnlineArchive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OnlineArchive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.archiveId">archiveId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference">OnlineArchiveCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataExpirationRule">dataExpirationRule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference">OnlineArchiveDataExpirationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataProcessRegion">dataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference">OnlineArchiveDataProcessRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFields">partitionFields</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList">OnlineArchivePartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference">OnlineArchiveScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionTypeInput">collectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collNameInput">collNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteriaInput">criteriaInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataExpirationRuleInput">dataExpirationRuleInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataProcessRegionInput">dataProcessRegionInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFieldsInput">partitionFieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.pausedInput">pausedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreationInput">syncCreationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionType">collectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collName">collName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreation">syncCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `archiveId`<sup>Required</sup> <a name="archiveId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.archiveId"></a>

```typescript
public readonly archiveId: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteria"></a>

```typescript
public readonly criteria: OnlineArchiveCriteriaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference">OnlineArchiveCriteriaOutputReference</a>

---

##### `dataExpirationRule`<sup>Required</sup> <a name="dataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataExpirationRule"></a>

```typescript
public readonly dataExpirationRule: OnlineArchiveDataExpirationRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference">OnlineArchiveDataExpirationRuleOutputReference</a>

---

##### `dataProcessRegion`<sup>Required</sup> <a name="dataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataProcessRegion"></a>

```typescript
public readonly dataProcessRegion: OnlineArchiveDataProcessRegionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference">OnlineArchiveDataProcessRegionOutputReference</a>

---

##### `partitionFields`<sup>Required</sup> <a name="partitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFields"></a>

```typescript
public readonly partitionFields: OnlineArchivePartitionFieldsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList">OnlineArchivePartitionFieldsList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.schedule"></a>

```typescript
public readonly schedule: OnlineArchiveScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference">OnlineArchiveScheduleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `collectionTypeInput`<sup>Optional</sup> <a name="collectionTypeInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionTypeInput"></a>

```typescript
public readonly collectionTypeInput: string;
```

- *Type:* string

---

##### `collNameInput`<sup>Optional</sup> <a name="collNameInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collNameInput"></a>

```typescript
public readonly collNameInput: string;
```

- *Type:* string

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: OnlineArchiveCriteria;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

---

##### `dataExpirationRuleInput`<sup>Optional</sup> <a name="dataExpirationRuleInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataExpirationRuleInput"></a>

```typescript
public readonly dataExpirationRuleInput: OnlineArchiveDataExpirationRule;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a>

---

##### `dataProcessRegionInput`<sup>Optional</sup> <a name="dataProcessRegionInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dataProcessRegionInput"></a>

```typescript
public readonly dataProcessRegionInput: OnlineArchiveDataProcessRegion;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a>

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `partitionFieldsInput`<sup>Optional</sup> <a name="partitionFieldsInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFieldsInput"></a>

```typescript
public readonly partitionFieldsInput: IResolvable | OnlineArchivePartitionFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>[]

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.pausedInput"></a>

```typescript
public readonly pausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: OnlineArchiveSchedule;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

---

##### `syncCreationInput`<sup>Optional</sup> <a name="syncCreationInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreationInput"></a>

```typescript
public readonly syncCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `collectionType`<sup>Required</sup> <a name="collectionType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionType"></a>

```typescript
public readonly collectionType: string;
```

- *Type:* string

---

##### `collName`<sup>Required</sup> <a name="collName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collName"></a>

```typescript
public readonly collName: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `syncCreation`<sup>Required</sup> <a name="syncCreation" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreation"></a>

```typescript
public readonly syncCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OnlineArchiveConfig <a name="OnlineArchiveConfig" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.Initializer"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

const onlineArchiveConfig: onlineArchive.OnlineArchiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#cluster_name OnlineArchive#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collName">collName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#coll_name OnlineArchive#coll_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dbName">dbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#db_name OnlineArchive#db_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#project_id OnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collectionType">collectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#collection_type OnlineArchive#collection_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dataExpirationRule">dataExpirationRule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a></code> | data_expiration_rule block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dataProcessRegion">dataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a></code> | data_process_region block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#id OnlineArchive#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.partitionFields">partitionFields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>[]</code> | partition_fields block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#paused OnlineArchive#paused}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.syncCreation">syncCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#sync_creation OnlineArchive#sync_creation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#cluster_name OnlineArchive#cluster_name}.

---

##### `collName`<sup>Required</sup> <a name="collName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collName"></a>

```typescript
public readonly collName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#coll_name OnlineArchive#coll_name}.

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.criteria"></a>

```typescript
public readonly criteria: OnlineArchiveCriteria;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#criteria OnlineArchive#criteria}

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#db_name OnlineArchive#db_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#project_id OnlineArchive#project_id}.

---

##### `collectionType`<sup>Optional</sup> <a name="collectionType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collectionType"></a>

```typescript
public readonly collectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#collection_type OnlineArchive#collection_type}.

---

##### `dataExpirationRule`<sup>Optional</sup> <a name="dataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dataExpirationRule"></a>

```typescript
public readonly dataExpirationRule: OnlineArchiveDataExpirationRule;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a>

data_expiration_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#data_expiration_rule OnlineArchive#data_expiration_rule}

---

##### `dataProcessRegion`<sup>Optional</sup> <a name="dataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dataProcessRegion"></a>

```typescript
public readonly dataProcessRegion: OnlineArchiveDataProcessRegion;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a>

data_process_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#data_process_region OnlineArchive#data_process_region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#id OnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionFields`<sup>Optional</sup> <a name="partitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.partitionFields"></a>

```typescript
public readonly partitionFields: IResolvable | OnlineArchivePartitionFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>[]

partition_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#partition_fields OnlineArchive#partition_fields}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#paused OnlineArchive#paused}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.schedule"></a>

```typescript
public readonly schedule: OnlineArchiveSchedule;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#schedule OnlineArchive#schedule}

---

##### `syncCreation`<sup>Optional</sup> <a name="syncCreation" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.syncCreation"></a>

```typescript
public readonly syncCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#sync_creation OnlineArchive#sync_creation}.

---

### OnlineArchiveCriteria <a name="OnlineArchiveCriteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.Initializer"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

const onlineArchiveCriteria: onlineArchive.OnlineArchiveCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#type OnlineArchive#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateField">dateField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#date_field OnlineArchive#date_field}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateFormat">dateFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#date_format OnlineArchive#date_format}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.expireAfterDays">expireAfterDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#query OnlineArchive#query}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#type OnlineArchive#type}.

---

##### `dateField`<sup>Optional</sup> <a name="dateField" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateField"></a>

```typescript
public readonly dateField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#date_field OnlineArchive#date_field}.

---

##### `dateFormat`<sup>Optional</sup> <a name="dateFormat" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#date_format OnlineArchive#date_format}.

---

##### `expireAfterDays`<sup>Optional</sup> <a name="expireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.expireAfterDays"></a>

```typescript
public readonly expireAfterDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#query OnlineArchive#query}.

---

### OnlineArchiveDataExpirationRule <a name="OnlineArchiveDataExpirationRule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule.Initializer"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

const onlineArchiveDataExpirationRule: onlineArchive.OnlineArchiveDataExpirationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule.property.expireAfterDays">expireAfterDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}. |

---

##### `expireAfterDays`<sup>Required</sup> <a name="expireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule.property.expireAfterDays"></a>

```typescript
public readonly expireAfterDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}.

---

### OnlineArchiveDataProcessRegion <a name="OnlineArchiveDataProcessRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.Initializer"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

const onlineArchiveDataProcessRegion: onlineArchive.OnlineArchiveDataProcessRegion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#cloud_provider OnlineArchive#cloud_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#region OnlineArchive#region}. |

---

##### `cloudProvider`<sup>Optional</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#cloud_provider OnlineArchive#cloud_provider}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#region OnlineArchive#region}.

---

### OnlineArchivePartitionFields <a name="OnlineArchivePartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.Initializer"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

const onlineArchivePartitionFields: onlineArchive.OnlineArchivePartitionFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.fieldName">fieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#field_name OnlineArchive#field_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.order">order</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#order OnlineArchive#order}. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#field_name OnlineArchive#field_name}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#order OnlineArchive#order}.

---

### OnlineArchiveSchedule <a name="OnlineArchiveSchedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.Initializer"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

const onlineArchiveSchedule: onlineArchive.OnlineArchiveSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#type OnlineArchive#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfMonth">dayOfMonth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#day_of_month OnlineArchive#day_of_month}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfWeek">dayOfWeek</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#day_of_week OnlineArchive#day_of_week}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endHour">endHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#end_hour OnlineArchive#end_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endMinute">endMinute</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#end_minute OnlineArchive#end_minute}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startHour">startHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#start_hour OnlineArchive#start_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startMinute">startMinute</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#start_minute OnlineArchive#start_minute}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#type OnlineArchive#type}.

---

##### `dayOfMonth`<sup>Optional</sup> <a name="dayOfMonth" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#day_of_month OnlineArchive#day_of_month}.

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#day_of_week OnlineArchive#day_of_week}.

---

##### `endHour`<sup>Optional</sup> <a name="endHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endHour"></a>

```typescript
public readonly endHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#end_hour OnlineArchive#end_hour}.

---

##### `endMinute`<sup>Optional</sup> <a name="endMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endMinute"></a>

```typescript
public readonly endMinute: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#end_minute OnlineArchive#end_minute}.

---

##### `startHour`<sup>Optional</sup> <a name="startHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startHour"></a>

```typescript
public readonly startHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#start_hour OnlineArchive#start_hour}.

---

##### `startMinute`<sup>Optional</sup> <a name="startMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startMinute"></a>

```typescript
public readonly startMinute: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/online_archive#start_minute OnlineArchive#start_minute}.

---

## Classes <a name="Classes" id="Classes"></a>

### OnlineArchiveCriteriaOutputReference <a name="OnlineArchiveCriteriaOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

new onlineArchive.OnlineArchiveCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateField">resetDateField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateFormat">resetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetExpireAfterDays">resetExpireAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDateField` <a name="resetDateField" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateField"></a>

```typescript
public resetDateField(): void
```

##### `resetDateFormat` <a name="resetDateFormat" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateFormat"></a>

```typescript
public resetDateFormat(): void
```

##### `resetExpireAfterDays` <a name="resetExpireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetExpireAfterDays"></a>

```typescript
public resetExpireAfterDays(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFieldInput">dateFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormatInput">dateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDaysInput">expireAfterDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateField">dateField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDays">expireAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateFieldInput`<sup>Optional</sup> <a name="dateFieldInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFieldInput"></a>

```typescript
public readonly dateFieldInput: string;
```

- *Type:* string

---

##### `dateFormatInput`<sup>Optional</sup> <a name="dateFormatInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormatInput"></a>

```typescript
public readonly dateFormatInput: string;
```

- *Type:* string

---

##### `expireAfterDaysInput`<sup>Optional</sup> <a name="expireAfterDaysInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDaysInput"></a>

```typescript
public readonly expireAfterDaysInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `dateField`<sup>Required</sup> <a name="dateField" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateField"></a>

```typescript
public readonly dateField: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `expireAfterDays`<sup>Required</sup> <a name="expireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDays"></a>

```typescript
public readonly expireAfterDays: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineArchiveCriteria;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

---


### OnlineArchiveDataExpirationRuleOutputReference <a name="OnlineArchiveDataExpirationRuleOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

new onlineArchive.OnlineArchiveDataExpirationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.expireAfterDaysInput">expireAfterDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.expireAfterDays">expireAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expireAfterDaysInput`<sup>Optional</sup> <a name="expireAfterDaysInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.expireAfterDaysInput"></a>

```typescript
public readonly expireAfterDaysInput: number;
```

- *Type:* number

---

##### `expireAfterDays`<sup>Required</sup> <a name="expireAfterDays" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.expireAfterDays"></a>

```typescript
public readonly expireAfterDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineArchiveDataExpirationRule;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataExpirationRule">OnlineArchiveDataExpirationRule</a>

---


### OnlineArchiveDataProcessRegionOutputReference <a name="OnlineArchiveDataProcessRegionOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

new onlineArchive.OnlineArchiveDataProcessRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resetCloudProvider">resetCloudProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudProvider` <a name="resetCloudProvider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resetCloudProvider"></a>

```typescript
public resetCloudProvider(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.cloudProviderInput">cloudProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.cloudProviderInput"></a>

```typescript
public readonly cloudProviderInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineArchiveDataProcessRegion;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveDataProcessRegion">OnlineArchiveDataProcessRegion</a>

---


### OnlineArchivePartitionFieldsList <a name="OnlineArchivePartitionFieldsList" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

new onlineArchive.OnlineArchivePartitionFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.get"></a>

```typescript
public get(index: number): OnlineArchivePartitionFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnlineArchivePartitionFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>[]

---


### OnlineArchivePartitionFieldsOutputReference <a name="OnlineArchivePartitionFieldsOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

new onlineArchive.OnlineArchivePartitionFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldType">fieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldType`<sup>Required</sup> <a name="fieldType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldType"></a>

```typescript
public readonly fieldType: string;
```

- *Type:* string

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnlineArchivePartitionFields;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>

---


### OnlineArchiveScheduleOutputReference <a name="OnlineArchiveScheduleOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer"></a>

```typescript
import { onlineArchive } from '@cdktf/provider-mongodbatlas'

new onlineArchive.OnlineArchiveScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfMonth">resetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndHour">resetEndHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndMinute">resetEndMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartHour">resetStartHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartMinute">resetStartMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOfMonth` <a name="resetDayOfMonth" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfMonth"></a>

```typescript
public resetDayOfMonth(): void
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfWeek"></a>

```typescript
public resetDayOfWeek(): void
```

##### `resetEndHour` <a name="resetEndHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndHour"></a>

```typescript
public resetEndHour(): void
```

##### `resetEndMinute` <a name="resetEndMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndMinute"></a>

```typescript
public resetEndMinute(): void
```

##### `resetStartHour` <a name="resetStartHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartHour"></a>

```typescript
public resetStartHour(): void
```

##### `resetStartMinute` <a name="resetStartMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartMinute"></a>

```typescript
public resetStartMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonthInput">dayOfMonthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHourInput">endHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinuteInput">endMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHourInput">startHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinuteInput">startMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonth">dayOfMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHour">endHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinute">endMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHour">startHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinute">startMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfMonthInput`<sup>Optional</sup> <a name="dayOfMonthInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonthInput"></a>

```typescript
public readonly dayOfMonthInput: number;
```

- *Type:* number

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: number;
```

- *Type:* number

---

##### `endHourInput`<sup>Optional</sup> <a name="endHourInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHourInput"></a>

```typescript
public readonly endHourInput: number;
```

- *Type:* number

---

##### `endMinuteInput`<sup>Optional</sup> <a name="endMinuteInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinuteInput"></a>

```typescript
public readonly endMinuteInput: number;
```

- *Type:* number

---

##### `startHourInput`<sup>Optional</sup> <a name="startHourInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHourInput"></a>

```typescript
public readonly startHourInput: number;
```

- *Type:* number

---

##### `startMinuteInput`<sup>Optional</sup> <a name="startMinuteInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinuteInput"></a>

```typescript
public readonly startMinuteInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: number;
```

- *Type:* number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: number;
```

- *Type:* number

---

##### `endHour`<sup>Required</sup> <a name="endHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHour"></a>

```typescript
public readonly endHour: number;
```

- *Type:* number

---

##### `endMinute`<sup>Required</sup> <a name="endMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinute"></a>

```typescript
public readonly endMinute: number;
```

- *Type:* number

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHour"></a>

```typescript
public readonly startHour: number;
```

- *Type:* number

---

##### `startMinute`<sup>Required</sup> <a name="startMinute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinute"></a>

```typescript
public readonly startMinute: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OnlineArchiveSchedule;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

---



