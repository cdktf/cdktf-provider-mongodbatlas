# `dataMongodbatlasSharedTierRestoreJob` Submodule <a name="`dataMongodbatlasSharedTierRestoreJob` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasSharedTierRestoreJob <a name="DataMongodbatlasSharedTierRestoreJob" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/shared_tier_restore_job mongodbatlas_shared_tier_restore_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJob } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob(scope: Construct, id: string, config: DataMongodbatlasSharedTierRestoreJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig">DataMongodbatlasSharedTierRestoreJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig">DataMongodbatlasSharedTierRestoreJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasSharedTierRestoreJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isConstruct"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJob } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformElement"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJob } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJob } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJob } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasSharedTierRestoreJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasSharedTierRestoreJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasSharedTierRestoreJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/shared_tier_restore_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasSharedTierRestoreJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.deliveryType">deliveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.restoreFinishedDate">restoreFinishedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.restoreScheduledDate">restoreScheduledDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.snapshotFinishedDate">snapshotFinishedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.snapshotUrl">snapshotUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.targetDeploymentItemName">targetDeploymentItemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.targetProjectId">targetProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.jobIdInput">jobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `deliveryType`<sup>Required</sup> <a name="deliveryType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.deliveryType"></a>

```typescript
public readonly deliveryType: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `restoreFinishedDate`<sup>Required</sup> <a name="restoreFinishedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.restoreFinishedDate"></a>

```typescript
public readonly restoreFinishedDate: string;
```

- *Type:* string

---

##### `restoreScheduledDate`<sup>Required</sup> <a name="restoreScheduledDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.restoreScheduledDate"></a>

```typescript
public readonly restoreScheduledDate: string;
```

- *Type:* string

---

##### `snapshotFinishedDate`<sup>Required</sup> <a name="snapshotFinishedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.snapshotFinishedDate"></a>

```typescript
public readonly snapshotFinishedDate: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `snapshotUrl`<sup>Required</sup> <a name="snapshotUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.snapshotUrl"></a>

```typescript
public readonly snapshotUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `targetDeploymentItemName`<sup>Required</sup> <a name="targetDeploymentItemName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.targetDeploymentItemName"></a>

```typescript
public readonly targetDeploymentItemName: string;
```

- *Type:* string

---

##### `targetProjectId`<sup>Required</sup> <a name="targetProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.targetProjectId"></a>

```typescript
public readonly targetProjectId: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasSharedTierRestoreJobConfig <a name="DataMongodbatlasSharedTierRestoreJobConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.Initializer"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJob } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasSharedTierRestoreJobConfig: dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/shared_tier_restore_job#cluster_name DataMongodbatlasSharedTierRestoreJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.jobId">jobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/shared_tier_restore_job#job_id DataMongodbatlasSharedTierRestoreJob#job_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/shared_tier_restore_job#project_id DataMongodbatlasSharedTierRestoreJob#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/shared_tier_restore_job#id DataMongodbatlasSharedTierRestoreJob#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/shared_tier_restore_job#cluster_name DataMongodbatlasSharedTierRestoreJob#cluster_name}.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/shared_tier_restore_job#job_id DataMongodbatlasSharedTierRestoreJob#job_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/shared_tier_restore_job#project_id DataMongodbatlasSharedTierRestoreJob#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJob.DataMongodbatlasSharedTierRestoreJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/data-sources/shared_tier_restore_job#id DataMongodbatlasSharedTierRestoreJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



