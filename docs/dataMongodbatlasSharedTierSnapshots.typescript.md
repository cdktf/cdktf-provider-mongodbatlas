# `dataMongodbatlasSharedTierSnapshots` Submodule <a name="`dataMongodbatlasSharedTierSnapshots` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasSharedTierSnapshots <a name="DataMongodbatlasSharedTierSnapshots" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/shared_tier_snapshots mongodbatlas_shared_tier_snapshots}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.Initializer"></a>

```typescript
import { dataMongodbatlasSharedTierSnapshots } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots(scope: Construct, id: string, config: DataMongodbatlasSharedTierSnapshotsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig">DataMongodbatlasSharedTierSnapshotsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig">DataMongodbatlasSharedTierSnapshotsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasSharedTierSnapshots resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.isConstruct"></a>

```typescript
import { dataMongodbatlasSharedTierSnapshots } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.isTerraformElement"></a>

```typescript
import { dataMongodbatlasSharedTierSnapshots } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasSharedTierSnapshots } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasSharedTierSnapshots } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasSharedTierSnapshots resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasSharedTierSnapshots to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasSharedTierSnapshots that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/shared_tier_snapshots#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasSharedTierSnapshots to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList">DataMongodbatlasSharedTierSnapshotsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.totalCount">totalCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.results"></a>

```typescript
public readonly results: DataMongodbatlasSharedTierSnapshotsResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList">DataMongodbatlasSharedTierSnapshotsResultsList</a>

---

##### `totalCount`<sup>Required</sup> <a name="totalCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.totalCount"></a>

```typescript
public readonly totalCount: number;
```

- *Type:* number

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshots.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasSharedTierSnapshotsConfig <a name="DataMongodbatlasSharedTierSnapshotsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.Initializer"></a>

```typescript
import { dataMongodbatlasSharedTierSnapshots } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasSharedTierSnapshotsConfig: dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/shared_tier_snapshots#cluster_name DataMongodbatlasSharedTierSnapshots#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/shared_tier_snapshots#project_id DataMongodbatlasSharedTierSnapshots#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/shared_tier_snapshots#id DataMongodbatlasSharedTierSnapshots#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/shared_tier_snapshots#cluster_name DataMongodbatlasSharedTierSnapshots#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/shared_tier_snapshots#project_id DataMongodbatlasSharedTierSnapshots#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/shared_tier_snapshots#id DataMongodbatlasSharedTierSnapshots#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasSharedTierSnapshotsResults <a name="DataMongodbatlasSharedTierSnapshotsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResults.Initializer"></a>

```typescript
import { dataMongodbatlasSharedTierSnapshots } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasSharedTierSnapshotsResults: dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResults = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasSharedTierSnapshotsResultsList <a name="DataMongodbatlasSharedTierSnapshotsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasSharedTierSnapshots } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasSharedTierSnapshotsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasSharedTierSnapshotsResultsOutputReference <a name="DataMongodbatlasSharedTierSnapshotsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasSharedTierSnapshots } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.finishTime">finishTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.mongoDbVersion">mongoDbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.scheduledTime">scheduledTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResults">DataMongodbatlasSharedTierSnapshotsResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `finishTime`<sup>Required</sup> <a name="finishTime" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.finishTime"></a>

```typescript
public readonly finishTime: string;
```

- *Type:* string

---

##### `mongoDbVersion`<sup>Required</sup> <a name="mongoDbVersion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.mongoDbVersion"></a>

```typescript
public readonly mongoDbVersion: string;
```

- *Type:* string

---

##### `scheduledTime`<sup>Required</sup> <a name="scheduledTime" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.scheduledTime"></a>

```typescript
public readonly scheduledTime: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasSharedTierSnapshotsResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSharedTierSnapshots.DataMongodbatlasSharedTierSnapshotsResults">DataMongodbatlasSharedTierSnapshotsResults</a>

---



