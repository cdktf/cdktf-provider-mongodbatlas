# `dataLakePipeline` Submodule <a name="`dataLakePipeline` Submodule" id="@cdktf/provider-mongodbatlas.dataLakePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLakePipeline <a name="DataLakePipeline" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline mongodbatlas_data_lake_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

new dataLakePipeline.DataLakePipeline(scope: Construct, id: string, config: DataLakePipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig">DataLakePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig">DataLakePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSink">putSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putTransformations">putTransformations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetSink">resetSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetTransformations">resetTransformations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSink` <a name="putSink" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSink"></a>

```typescript
public putSink(value: DataLakePipelineSink): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSource"></a>

```typescript
public putSource(value: DataLakePipelineSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a>

---

##### `putTransformations` <a name="putTransformations" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putTransformations"></a>

```typescript
public putTransformations(value: IResolvable | DataLakePipelineTransformations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putTransformations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>[]

---

##### `resetSink` <a name="resetSink" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetSink"></a>

```typescript
public resetSink(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTransformations` <a name="resetTransformations" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetTransformations"></a>

```typescript
public resetTransformations(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataLakePipeline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isConstruct"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

dataLakePipeline.DataLakePipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isTerraformElement"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

dataLakePipeline.DataLakePipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isTerraformResource"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

dataLakePipeline.DataLakePipeline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.generateConfigForImport"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

dataLakePipeline.DataLakePipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataLakePipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLakePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLakePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataLakePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.ingestionSchedules">ingestionSchedules</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList">DataLakePipelineIngestionSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.sink">sink</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference">DataLakePipelineSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.snapshots">snapshots</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList">DataLakePipelineSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.source">source</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference">DataLakePipelineSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.transformations">transformations</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList">DataLakePipelineTransformationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.sinkInput">sinkInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.transformationsInput">transformationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingestionSchedules`<sup>Required</sup> <a name="ingestionSchedules" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.ingestionSchedules"></a>

```typescript
public readonly ingestionSchedules: DataLakePipelineIngestionSchedulesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList">DataLakePipelineIngestionSchedulesList</a>

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `sink`<sup>Required</sup> <a name="sink" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.sink"></a>

```typescript
public readonly sink: DataLakePipelineSinkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference">DataLakePipelineSinkOutputReference</a>

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.snapshots"></a>

```typescript
public readonly snapshots: DataLakePipelineSnapshotsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList">DataLakePipelineSnapshotsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.source"></a>

```typescript
public readonly source: DataLakePipelineSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference">DataLakePipelineSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `transformations`<sup>Required</sup> <a name="transformations" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.transformations"></a>

```typescript
public readonly transformations: DataLakePipelineTransformationsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList">DataLakePipelineTransformationsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `sinkInput`<sup>Optional</sup> <a name="sinkInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.sinkInput"></a>

```typescript
public readonly sinkInput: DataLakePipelineSink;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.sourceInput"></a>

```typescript
public readonly sourceInput: DataLakePipelineSource;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a>

---

##### `transformationsInput`<sup>Optional</sup> <a name="transformationsInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.transformationsInput"></a>

```typescript
public readonly transformationsInput: IResolvable | DataLakePipelineTransformations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLakePipelineConfig <a name="DataLakePipelineConfig" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

const dataLakePipelineConfig: dataLakePipeline.DataLakePipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#name DataLakePipeline#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#project_id DataLakePipeline#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.sink">sink</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a></code> | sink block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.transformations">transformations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>[]</code> | transformations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#name DataLakePipeline#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#project_id DataLakePipeline#project_id}.

---

##### `sink`<sup>Optional</sup> <a name="sink" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.sink"></a>

```typescript
public readonly sink: DataLakePipelineSink;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a>

sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#sink DataLakePipeline#sink}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.source"></a>

```typescript
public readonly source: DataLakePipelineSource;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#source DataLakePipeline#source}

---

##### `transformations`<sup>Optional</sup> <a name="transformations" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.transformations"></a>

```typescript
public readonly transformations: IResolvable | DataLakePipelineTransformations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>[]

transformations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#transformations DataLakePipeline#transformations}

---

### DataLakePipelineIngestionSchedules <a name="DataLakePipelineIngestionSchedules" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedules.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

const dataLakePipelineIngestionSchedules: dataLakePipeline.DataLakePipelineIngestionSchedules = { ... }
```


### DataLakePipelineSink <a name="DataLakePipelineSink" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

const dataLakePipelineSink: dataLakePipeline.DataLakePipelineSink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.partitionFields">partitionFields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>[]</code> | partition_fields block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#provider DataLakePipeline#provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#region DataLakePipeline#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#type DataLakePipeline#type}. |

---

##### `partitionFields`<sup>Optional</sup> <a name="partitionFields" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.partitionFields"></a>

```typescript
public readonly partitionFields: IResolvable | DataLakePipelineSinkPartitionFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>[]

partition_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#partition_fields DataLakePipeline#partition_fields}

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#provider DataLakePipeline#provider}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#region DataLakePipeline#region}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#type DataLakePipeline#type}.

---

### DataLakePipelineSinkPartitionFields <a name="DataLakePipelineSinkPartitionFields" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

const dataLakePipelineSinkPartitionFields: dataLakePipeline.DataLakePipelineSinkPartitionFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields.property.fieldName">fieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#field_name DataLakePipeline#field_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields.property.order">order</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#order DataLakePipeline#order}. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#field_name DataLakePipeline#field_name}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#order DataLakePipeline#order}.

---

### DataLakePipelineSnapshots <a name="DataLakePipelineSnapshots" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshots.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

const dataLakePipelineSnapshots: dataLakePipeline.DataLakePipelineSnapshots = { ... }
```


### DataLakePipelineSource <a name="DataLakePipelineSource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

const dataLakePipelineSource: dataLakePipeline.DataLakePipelineSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#cluster_name DataLakePipeline#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.collectionName">collectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#collection_name DataLakePipeline#collection_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#database_name DataLakePipeline#database_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.policyItemId">policyItemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#policy_item_id DataLakePipeline#policy_item_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#project_id DataLakePipeline#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#type DataLakePipeline#type}. |

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#cluster_name DataLakePipeline#cluster_name}.

---

##### `collectionName`<sup>Optional</sup> <a name="collectionName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.collectionName"></a>

```typescript
public readonly collectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#collection_name DataLakePipeline#collection_name}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#database_name DataLakePipeline#database_name}.

---

##### `policyItemId`<sup>Optional</sup> <a name="policyItemId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.policyItemId"></a>

```typescript
public readonly policyItemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#policy_item_id DataLakePipeline#policy_item_id}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#project_id DataLakePipeline#project_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#type DataLakePipeline#type}.

---

### DataLakePipelineTransformations <a name="DataLakePipelineTransformations" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

const dataLakePipelineTransformations: dataLakePipeline.DataLakePipelineTransformations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations.property.field">field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#field DataLakePipeline#field}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#type DataLakePipeline#type}. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#field DataLakePipeline#field}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/data_lake_pipeline#type DataLakePipeline#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLakePipelineIngestionSchedulesList <a name="DataLakePipelineIngestionSchedulesList" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

new dataLakePipeline.DataLakePipelineIngestionSchedulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.get"></a>

```typescript
public get(index: number): DataLakePipelineIngestionSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataLakePipelineIngestionSchedulesOutputReference <a name="DataLakePipelineIngestionSchedulesOutputReference" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

new dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.frequencyType">frequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.retentionValue">retentionValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedules">DataLakePipelineIngestionSchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.frequencyType"></a>

```typescript
public readonly frequencyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLakePipelineIngestionSchedules;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedules">DataLakePipelineIngestionSchedules</a>

---


### DataLakePipelineSinkOutputReference <a name="DataLakePipelineSinkOutputReference" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

new dataLakePipeline.DataLakePipelineSinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.putPartitionFields">putPartitionFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetPartitionFields">resetPartitionFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetProvider">resetProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitionFields` <a name="putPartitionFields" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.putPartitionFields"></a>

```typescript
public putPartitionFields(value: IResolvable | DataLakePipelineSinkPartitionFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.putPartitionFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>[]

---

##### `resetPartitionFields` <a name="resetPartitionFields" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetPartitionFields"></a>

```typescript
public resetPartitionFields(): void
```

##### `resetProvider` <a name="resetProvider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetProvider"></a>

```typescript
public resetProvider(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.partitionFields">partitionFields</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList">DataLakePipelineSinkPartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.partitionFieldsInput">partitionFieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionFields`<sup>Required</sup> <a name="partitionFields" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.partitionFields"></a>

```typescript
public readonly partitionFields: DataLakePipelineSinkPartitionFieldsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList">DataLakePipelineSinkPartitionFieldsList</a>

---

##### `partitionFieldsInput`<sup>Optional</sup> <a name="partitionFieldsInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.partitionFieldsInput"></a>

```typescript
public readonly partitionFieldsInput: IResolvable | DataLakePipelineSinkPartitionFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>[]

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLakePipelineSink;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a>

---


### DataLakePipelineSinkPartitionFieldsList <a name="DataLakePipelineSinkPartitionFieldsList" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

new dataLakePipeline.DataLakePipelineSinkPartitionFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.get"></a>

```typescript
public get(index: number): DataLakePipelineSinkPartitionFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLakePipelineSinkPartitionFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>[]

---


### DataLakePipelineSinkPartitionFieldsOutputReference <a name="DataLakePipelineSinkPartitionFieldsOutputReference" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

new dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLakePipelineSinkPartitionFields;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>

---


### DataLakePipelineSnapshotsList <a name="DataLakePipelineSnapshotsList" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

new dataLakePipeline.DataLakePipelineSnapshotsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.get"></a>

```typescript
public get(index: number): DataLakePipelineSnapshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataLakePipelineSnapshotsOutputReference <a name="DataLakePipelineSnapshotsOutputReference" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

new dataLakePipeline.DataLakePipelineSnapshotsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.copyRegion">copyRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.frequencyYype">frequencyYype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.masterKey">masterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.mongodVersion">mongodVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.replicaSetName">replicaSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.snapshotType">snapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshots">DataLakePipelineSnapshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyRegion`<sup>Required</sup> <a name="copyRegion" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.copyRegion"></a>

```typescript
public readonly copyRegion: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `frequencyYype`<sup>Required</sup> <a name="frequencyYype" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.frequencyYype"></a>

```typescript
public readonly frequencyYype: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `masterKey`<sup>Required</sup> <a name="masterKey" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.masterKey"></a>

```typescript
public readonly masterKey: string;
```

- *Type:* string

---

##### `mongodVersion`<sup>Required</sup> <a name="mongodVersion" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.mongodVersion"></a>

```typescript
public readonly mongodVersion: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `replicaSetName`<sup>Required</sup> <a name="replicaSetName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.replicaSetName"></a>

```typescript
public readonly replicaSetName: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLakePipelineSnapshots;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshots">DataLakePipelineSnapshots</a>

---


### DataLakePipelineSourceOutputReference <a name="DataLakePipelineSourceOutputReference" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

new dataLakePipeline.DataLakePipelineSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetCollectionName">resetCollectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetPolicyItemId">resetPolicyItemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterName` <a name="resetClusterName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetClusterName"></a>

```typescript
public resetClusterName(): void
```

##### `resetCollectionName` <a name="resetCollectionName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetCollectionName"></a>

```typescript
public resetCollectionName(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetPolicyItemId` <a name="resetPolicyItemId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetPolicyItemId"></a>

```typescript
public resetPolicyItemId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.collectionNameInput">collectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.policyItemIdInput">policyItemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.collectionName">collectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.policyItemId">policyItemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `collectionNameInput`<sup>Optional</sup> <a name="collectionNameInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.collectionNameInput"></a>

```typescript
public readonly collectionNameInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `policyItemIdInput`<sup>Optional</sup> <a name="policyItemIdInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.policyItemIdInput"></a>

```typescript
public readonly policyItemIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `collectionName`<sup>Required</sup> <a name="collectionName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.collectionName"></a>

```typescript
public readonly collectionName: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `policyItemId`<sup>Required</sup> <a name="policyItemId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.policyItemId"></a>

```typescript
public readonly policyItemId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLakePipelineSource;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a>

---


### DataLakePipelineTransformationsList <a name="DataLakePipelineTransformationsList" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

new dataLakePipeline.DataLakePipelineTransformationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.get"></a>

```typescript
public get(index: number): DataLakePipelineTransformationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLakePipelineTransformations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>[]

---


### DataLakePipelineTransformationsOutputReference <a name="DataLakePipelineTransformationsOutputReference" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer"></a>

```typescript
import { dataLakePipeline } from '@cdktf/provider-mongodbatlas'

new dataLakePipeline.DataLakePipelineTransformationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetField` <a name="resetField" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resetField"></a>

```typescript
public resetField(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLakePipelineTransformations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>

---



