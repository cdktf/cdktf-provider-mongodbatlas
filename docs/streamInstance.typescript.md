# `streamInstance` Submodule <a name="`streamInstance` Submodule" id="@cdktf/provider-mongodbatlas.streamInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamInstance <a name="StreamInstance" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance mongodbatlas_stream_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.Initializer"></a>

```typescript
import { streamInstance } from '@cdktf/provider-mongodbatlas'

new streamInstance.StreamInstance(scope: Construct, id: string, config: StreamInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig">StreamInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig">StreamInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.putDataProcessRegion">putDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.putStreamConfig">putStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.resetStreamConfig">resetStreamConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataProcessRegion` <a name="putDataProcessRegion" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.putDataProcessRegion"></a>

```typescript
public putDataProcessRegion(value: StreamInstanceDataProcessRegion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.putDataProcessRegion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegion">StreamInstanceDataProcessRegion</a>

---

##### `putStreamConfig` <a name="putStreamConfig" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.putStreamConfig"></a>

```typescript
public putStreamConfig(value: StreamInstanceStreamConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.putStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfig">StreamInstanceStreamConfig</a>

---

##### `resetStreamConfig` <a name="resetStreamConfig" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.resetStreamConfig"></a>

```typescript
public resetStreamConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.isConstruct"></a>

```typescript
import { streamInstance } from '@cdktf/provider-mongodbatlas'

streamInstance.StreamInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.isTerraformElement"></a>

```typescript
import { streamInstance } from '@cdktf/provider-mongodbatlas'

streamInstance.StreamInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.isTerraformResource"></a>

```typescript
import { streamInstance } from '@cdktf/provider-mongodbatlas'

streamInstance.StreamInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.generateConfigForImport"></a>

```typescript
import { streamInstance } from '@cdktf/provider-mongodbatlas'

streamInstance.StreamInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StreamInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.dataProcessRegion">dataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference">StreamInstanceDataProcessRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.streamConfig">streamConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference">StreamInstanceStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.dataProcessRegionInput">dataProcessRegionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegion">StreamInstanceDataProcessRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.instanceNameInput">instanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.streamConfigInput">streamConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfig">StreamInstanceStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataProcessRegion`<sup>Required</sup> <a name="dataProcessRegion" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.dataProcessRegion"></a>

```typescript
public readonly dataProcessRegion: StreamInstanceDataProcessRegionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference">StreamInstanceDataProcessRegionOutputReference</a>

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `streamConfig`<sup>Required</sup> <a name="streamConfig" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.streamConfig"></a>

```typescript
public readonly streamConfig: StreamInstanceStreamConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference">StreamInstanceStreamConfigOutputReference</a>

---

##### `dataProcessRegionInput`<sup>Optional</sup> <a name="dataProcessRegionInput" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.dataProcessRegionInput"></a>

```typescript
public readonly dataProcessRegionInput: IResolvable | StreamInstanceDataProcessRegion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegion">StreamInstanceDataProcessRegion</a>

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.instanceNameInput"></a>

```typescript
public readonly instanceNameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `streamConfigInput`<sup>Optional</sup> <a name="streamConfigInput" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.streamConfigInput"></a>

```typescript
public readonly streamConfigInput: IResolvable | StreamInstanceStreamConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfig">StreamInstanceStreamConfig</a>

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamInstanceConfig <a name="StreamInstanceConfig" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.Initializer"></a>

```typescript
import { streamInstance } from '@cdktf/provider-mongodbatlas'

const streamInstanceConfig: streamInstance.StreamInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.dataProcessRegion">dataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegion">StreamInstanceDataProcessRegion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#data_process_region StreamInstance#data_process_region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.instanceName">instanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#instance_name StreamInstance#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#project_id StreamInstance#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.streamConfig">streamConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfig">StreamInstanceStreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#stream_config StreamInstance#stream_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataProcessRegion`<sup>Required</sup> <a name="dataProcessRegion" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.dataProcessRegion"></a>

```typescript
public readonly dataProcessRegion: StreamInstanceDataProcessRegion;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegion">StreamInstanceDataProcessRegion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#data_process_region StreamInstance#data_process_region}.

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#instance_name StreamInstance#instance_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#project_id StreamInstance#project_id}.

---

##### `streamConfig`<sup>Optional</sup> <a name="streamConfig" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceConfig.property.streamConfig"></a>

```typescript
public readonly streamConfig: StreamInstanceStreamConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfig">StreamInstanceStreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#stream_config StreamInstance#stream_config}.

---

### StreamInstanceDataProcessRegion <a name="StreamInstanceDataProcessRegion" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegion.Initializer"></a>

```typescript
import { streamInstance } from '@cdktf/provider-mongodbatlas'

const streamInstanceDataProcessRegion: streamInstance.StreamInstanceDataProcessRegion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegion.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#cloud_provider StreamInstance#cloud_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegion.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#region StreamInstance#region}. |

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegion.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#cloud_provider StreamInstance#cloud_provider}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegion.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#region StreamInstance#region}.

---

### StreamInstanceStreamConfig <a name="StreamInstanceStreamConfig" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfig.Initializer"></a>

```typescript
import { streamInstance } from '@cdktf/provider-mongodbatlas'

const streamInstanceStreamConfig: streamInstance.StreamInstanceStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfig.property.tier">tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#tier StreamInstance#tier}. |

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/stream_instance#tier StreamInstance#tier}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamInstanceDataProcessRegionOutputReference <a name="StreamInstanceDataProcessRegionOutputReference" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.Initializer"></a>

```typescript
import { streamInstance } from '@cdktf/provider-mongodbatlas'

new streamInstance.StreamInstanceDataProcessRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.cloudProviderInput">cloudProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegion">StreamInstanceDataProcessRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.cloudProviderInput"></a>

```typescript
public readonly cloudProviderInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamInstanceDataProcessRegion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceDataProcessRegion">StreamInstanceDataProcessRegion</a>

---


### StreamInstanceStreamConfigOutputReference <a name="StreamInstanceStreamConfigOutputReference" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.Initializer"></a>

```typescript
import { streamInstance } from '@cdktf/provider-mongodbatlas'

new streamInstance.StreamInstanceStreamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.resetTier">resetTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTier` <a name="resetTier" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.resetTier"></a>

```typescript
public resetTier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfig">StreamInstanceStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamInstanceStreamConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.streamInstance.StreamInstanceStreamConfig">StreamInstanceStreamConfig</a>

---



