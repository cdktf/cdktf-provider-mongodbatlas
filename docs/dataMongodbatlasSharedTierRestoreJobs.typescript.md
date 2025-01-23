# `dataMongodbatlasSharedTierRestoreJobs` Submodule <a name="`dataMongodbatlasSharedTierRestoreJobs` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasSharedTierRestoreJobs <a name="DataMongodbatlasSharedTierRestoreJobs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/shared_tier_restore_jobs mongodbatlas_shared_tier_restore_jobs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.Initializer"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJobs } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs(scope: Construct, id: string, config: DataMongodbatlasSharedTierRestoreJobsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig">DataMongodbatlasSharedTierRestoreJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig">DataMongodbatlasSharedTierRestoreJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasSharedTierRestoreJobs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.isConstruct"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJobs } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.isTerraformElement"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJobs } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJobs } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJobs } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasSharedTierRestoreJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasSharedTierRestoreJobs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasSharedTierRestoreJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/shared_tier_restore_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasSharedTierRestoreJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList">DataMongodbatlasSharedTierRestoreJobsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.totalCount">totalCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.results"></a>

```typescript
public readonly results: DataMongodbatlasSharedTierRestoreJobsResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList">DataMongodbatlasSharedTierRestoreJobsResultsList</a>

---

##### `totalCount`<sup>Required</sup> <a name="totalCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.totalCount"></a>

```typescript
public readonly totalCount: number;
```

- *Type:* number

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasSharedTierRestoreJobsConfig <a name="DataMongodbatlasSharedTierRestoreJobsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.Initializer"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJobs } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasSharedTierRestoreJobsConfig: dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/shared_tier_restore_jobs#cluster_name DataMongodbatlasSharedTierRestoreJobs#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/shared_tier_restore_jobs#project_id DataMongodbatlasSharedTierRestoreJobs#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/shared_tier_restore_jobs#id DataMongodbatlasSharedTierRestoreJobs#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/shared_tier_restore_jobs#cluster_name DataMongodbatlasSharedTierRestoreJobs#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/shared_tier_restore_jobs#project_id DataMongodbatlasSharedTierRestoreJobs#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/shared_tier_restore_jobs#id DataMongodbatlasSharedTierRestoreJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasSharedTierRestoreJobsResults <a name="DataMongodbatlasSharedTierRestoreJobsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResults.Initializer"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJobs } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasSharedTierRestoreJobsResults: dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResults = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasSharedTierRestoreJobsResultsList <a name="DataMongodbatlasSharedTierRestoreJobsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJobs } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasSharedTierRestoreJobsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasSharedTierRestoreJobsResultsOutputReference <a name="DataMongodbatlasSharedTierRestoreJobsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasSharedTierRestoreJobs } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.deliveryType">deliveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.restoreFinishedDate">restoreFinishedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.restoreScheduledDate">restoreScheduledDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.snapshotFinishedDate">snapshotFinishedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.snapshotUrl">snapshotUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.targetDeploymentItemName">targetDeploymentItemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.targetProjectId">targetProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResults">DataMongodbatlasSharedTierRestoreJobsResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryType`<sup>Required</sup> <a name="deliveryType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.deliveryType"></a>

```typescript
public readonly deliveryType: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `restoreFinishedDate`<sup>Required</sup> <a name="restoreFinishedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.restoreFinishedDate"></a>

```typescript
public readonly restoreFinishedDate: string;
```

- *Type:* string

---

##### `restoreScheduledDate`<sup>Required</sup> <a name="restoreScheduledDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.restoreScheduledDate"></a>

```typescript
public readonly restoreScheduledDate: string;
```

- *Type:* string

---

##### `snapshotFinishedDate`<sup>Required</sup> <a name="snapshotFinishedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.snapshotFinishedDate"></a>

```typescript
public readonly snapshotFinishedDate: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `snapshotUrl`<sup>Required</sup> <a name="snapshotUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.snapshotUrl"></a>

```typescript
public readonly snapshotUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `targetDeploymentItemName`<sup>Required</sup> <a name="targetDeploymentItemName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.targetDeploymentItemName"></a>

```typescript
public readonly targetDeploymentItemName: string;
```

- *Type:* string

---

##### `targetProjectId`<sup>Required</sup> <a name="targetProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.targetProjectId"></a>

```typescript
public readonly targetProjectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasSharedTierRestoreJobsResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierRestoreJobs.DataMongodbatlasSharedTierRestoreJobsResults">DataMongodbatlasSharedTierRestoreJobsResults</a>

---



