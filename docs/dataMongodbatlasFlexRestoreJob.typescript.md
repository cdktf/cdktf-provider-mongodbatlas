# `dataMongodbatlasFlexRestoreJob` Submodule <a name="`dataMongodbatlasFlexRestoreJob` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFlexRestoreJob <a name="DataMongodbatlasFlexRestoreJob" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/flex_restore_job mongodbatlas_flex_restore_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.Initializer"></a>

```typescript
import { dataMongodbatlasFlexRestoreJob } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob(scope: Construct, id: string, config: DataMongodbatlasFlexRestoreJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig">DataMongodbatlasFlexRestoreJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig">DataMongodbatlasFlexRestoreJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasFlexRestoreJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.isConstruct"></a>

```typescript
import { dataMongodbatlasFlexRestoreJob } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.isTerraformElement"></a>

```typescript
import { dataMongodbatlasFlexRestoreJob } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasFlexRestoreJob } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasFlexRestoreJob } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasFlexRestoreJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasFlexRestoreJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasFlexRestoreJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/flex_restore_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasFlexRestoreJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.deliveryType">deliveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.restoreFinishedDate">restoreFinishedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.restoreScheduledDate">restoreScheduledDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.snapshotFinishedDate">snapshotFinishedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.snapshotUrl">snapshotUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.targetDeploymentItemName">targetDeploymentItemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.targetProjectId">targetProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.restoreJobIdInput">restoreJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.restoreJobId">restoreJobId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `deliveryType`<sup>Required</sup> <a name="deliveryType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.deliveryType"></a>

```typescript
public readonly deliveryType: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `restoreFinishedDate`<sup>Required</sup> <a name="restoreFinishedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.restoreFinishedDate"></a>

```typescript
public readonly restoreFinishedDate: string;
```

- *Type:* string

---

##### `restoreScheduledDate`<sup>Required</sup> <a name="restoreScheduledDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.restoreScheduledDate"></a>

```typescript
public readonly restoreScheduledDate: string;
```

- *Type:* string

---

##### `snapshotFinishedDate`<sup>Required</sup> <a name="snapshotFinishedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.snapshotFinishedDate"></a>

```typescript
public readonly snapshotFinishedDate: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `snapshotUrl`<sup>Required</sup> <a name="snapshotUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.snapshotUrl"></a>

```typescript
public readonly snapshotUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `targetDeploymentItemName`<sup>Required</sup> <a name="targetDeploymentItemName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.targetDeploymentItemName"></a>

```typescript
public readonly targetDeploymentItemName: string;
```

- *Type:* string

---

##### `targetProjectId`<sup>Required</sup> <a name="targetProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.targetProjectId"></a>

```typescript
public readonly targetProjectId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `restoreJobIdInput`<sup>Optional</sup> <a name="restoreJobIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.restoreJobIdInput"></a>

```typescript
public readonly restoreJobIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `restoreJobId`<sup>Required</sup> <a name="restoreJobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.restoreJobId"></a>

```typescript
public readonly restoreJobId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFlexRestoreJobConfig <a name="DataMongodbatlasFlexRestoreJobConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.Initializer"></a>

```typescript
import { dataMongodbatlasFlexRestoreJob } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFlexRestoreJobConfig: dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.name">name</a></code> | <code>string</code> | Human-readable label that identifies the flex cluster whose snapshot you want to restore. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.restoreJobId">restoreJobId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies the restore job. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Human-readable label that identifies the flex cluster whose snapshot you want to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/flex_restore_job#name DataMongodbatlasFlexRestoreJob#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/flex_restore_job#project_id DataMongodbatlasFlexRestoreJob#project_id}

---

##### `restoreJobId`<sup>Required</sup> <a name="restoreJobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexRestoreJob.DataMongodbatlasFlexRestoreJobConfig.property.restoreJobId"></a>

```typescript
public readonly restoreJobId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies the restore job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/flex_restore_job#restore_job_id DataMongodbatlasFlexRestoreJob#restore_job_id}

---



