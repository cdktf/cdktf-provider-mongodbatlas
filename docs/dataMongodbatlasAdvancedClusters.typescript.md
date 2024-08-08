# `dataMongodbatlasAdvancedClusters` Submodule <a name="`dataMongodbatlasAdvancedClusters` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAdvancedClusters <a name="DataMongodbatlasAdvancedClusters" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/advanced_clusters mongodbatlas_advanced_clusters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters(scope: Construct, id: string, config: DataMongodbatlasAdvancedClustersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig">DataMongodbatlasAdvancedClustersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig">DataMongodbatlasAdvancedClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasAdvancedClusters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isConstruct"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformElement"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasAdvancedClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasAdvancedClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasAdvancedClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/advanced_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasAdvancedClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList">DataMongodbatlasAdvancedClustersResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.results"></a>

```typescript
public readonly results: DataMongodbatlasAdvancedClustersResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList">DataMongodbatlasAdvancedClustersResultsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAdvancedClustersConfig <a name="DataMongodbatlasAdvancedClustersConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersConfig: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/advanced_clusters#project_id DataMongodbatlasAdvancedClusters#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/advanced_clusters#id DataMongodbatlasAdvancedClusters#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/advanced_clusters#project_id DataMongodbatlasAdvancedClusters#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/advanced_clusters#id DataMongodbatlasAdvancedClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasAdvancedClustersResults <a name="DataMongodbatlasAdvancedClustersResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResults.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResults: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResults = { ... }
```


### DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration <a name="DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsAdvancedConfiguration: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration = { ... }
```


### DataMongodbatlasAdvancedClustersResultsBiConnectorConfig <a name="DataMongodbatlasAdvancedClustersResultsBiConnectorConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfig.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsBiConnectorConfig: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfig = { ... }
```


### DataMongodbatlasAdvancedClustersResultsConnectionStrings <a name="DataMongodbatlasAdvancedClustersResultsConnectionStrings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStrings.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsConnectionStrings: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStrings = { ... }
```


### DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint = { ... }
```


### DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints = { ... }
```


### DataMongodbatlasAdvancedClustersResultsLabels <a name="DataMongodbatlasAdvancedClustersResultsLabels" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabels.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsLabels: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabels = { ... }
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecs <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecs.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsReplicationSpecs: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecs = { ... }
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs = { ... }
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling = { ... }
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs = { ... }
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling = { ... }
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs = { ... }
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs = { ... }
```


### DataMongodbatlasAdvancedClustersResultsTags <a name="DataMongodbatlasAdvancedClustersResultsTags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTags.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClustersResultsTags: dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList <a name="DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference <a name="DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.defaultReadConcern">defaultReadConcern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.failIndexKeyTooLong">failIndexKeyTooLong</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.javascriptEnabled">javascriptEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol">minimumEnabledTlsProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.noTableScan">noTableScan</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.oplogMinRetentionHours">oplogMinRetentionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.oplogSizeMb">oplogSizeMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector">sampleRefreshIntervalBiConnector</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.sampleSizeBiConnector">sampleSizeBiConnector</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds">transactionLifetimeLimitSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration">DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultReadConcern`<sup>Required</sup> <a name="defaultReadConcern" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.defaultReadConcern"></a>

```typescript
public readonly defaultReadConcern: string;
```

- *Type:* string

---

##### `defaultWriteConcern`<sup>Required</sup> <a name="defaultWriteConcern" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.defaultWriteConcern"></a>

```typescript
public readonly defaultWriteConcern: string;
```

- *Type:* string

---

##### `failIndexKeyTooLong`<sup>Required</sup> <a name="failIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.failIndexKeyTooLong"></a>

```typescript
public readonly failIndexKeyTooLong: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `javascriptEnabled`<sup>Required</sup> <a name="javascriptEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.javascriptEnabled"></a>

```typescript
public readonly javascriptEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `minimumEnabledTlsProtocol`<sup>Required</sup> <a name="minimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol"></a>

```typescript
public readonly minimumEnabledTlsProtocol: string;
```

- *Type:* string

---

##### `noTableScan`<sup>Required</sup> <a name="noTableScan" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.noTableScan"></a>

```typescript
public readonly noTableScan: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `oplogMinRetentionHours`<sup>Required</sup> <a name="oplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.oplogMinRetentionHours"></a>

```typescript
public readonly oplogMinRetentionHours: number;
```

- *Type:* number

---

##### `oplogSizeMb`<sup>Required</sup> <a name="oplogSizeMb" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.oplogSizeMb"></a>

```typescript
public readonly oplogSizeMb: number;
```

- *Type:* number

---

##### `sampleRefreshIntervalBiConnector`<sup>Required</sup> <a name="sampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector"></a>

```typescript
public readonly sampleRefreshIntervalBiConnector: number;
```

- *Type:* number

---

##### `sampleSizeBiConnector`<sup>Required</sup> <a name="sampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.sampleSizeBiConnector"></a>

```typescript
public readonly sampleSizeBiConnector: number;
```

- *Type:* number

---

##### `transactionLifetimeLimitSeconds`<sup>Required</sup> <a name="transactionLifetimeLimitSeconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds"></a>

```typescript
public readonly transactionLifetimeLimitSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration">DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration</a>

---


### DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList <a name="DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference <a name="DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.readPreference">readPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfig">DataMongodbatlasAdvancedClustersResultsBiConnectorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `readPreference`<sup>Required</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.readPreference"></a>

```typescript
public readonly readPreference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsBiConnectorConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfig">DataMongodbatlasAdvancedClustersResultsBiConnectorConfig</a>

---


### DataMongodbatlasAdvancedClustersResultsConnectionStringsList <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.private">private</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.privateSrv">privateSrv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.standard">standard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.standardSrv">standardSrv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStrings">DataMongodbatlasAdvancedClustersResultsConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `private`<sup>Required</sup> <a name="private" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.private"></a>

```typescript
public readonly private: string;
```

- *Type:* string

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList</a>

---

##### `privateSrv`<sup>Required</sup> <a name="privateSrv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.privateSrv"></a>

```typescript
public readonly privateSrv: string;
```

- *Type:* string

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.standard"></a>

```typescript
public readonly standard: string;
```

- *Type:* string

---

##### `standardSrv`<sup>Required</sup> <a name="standardSrv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.standardSrv"></a>

```typescript
public readonly standardSrv: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsConnectionStrings;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStrings">DataMongodbatlasAdvancedClustersResultsConnectionStrings</a>

---


### DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints</a>

---


### DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString">srvConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString">srvShardOptimizedConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList</a>

---

##### `srvConnectionString`<sup>Required</sup> <a name="srvConnectionString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString"></a>

```typescript
public readonly srvConnectionString: string;
```

- *Type:* string

---

##### `srvShardOptimizedConnectionString`<sup>Required</sup> <a name="srvShardOptimizedConnectionString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString"></a>

```typescript
public readonly srvShardOptimizedConnectionString: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint</a>

---


### DataMongodbatlasAdvancedClustersResultsLabelsList <a name="DataMongodbatlasAdvancedClustersResultsLabelsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsLabelsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsLabelsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabels">DataMongodbatlasAdvancedClustersResultsLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsLabels;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabels">DataMongodbatlasAdvancedClustersResultsLabels</a>

---


### DataMongodbatlasAdvancedClustersResultsList <a name="DataMongodbatlasAdvancedClustersResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList">DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.backupEnabled">backupEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.biConnectorConfig">biConnectorConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList">DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.connectionStrings">connectionStrings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList">DataMongodbatlasAdvancedClustersResultsConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.createDate">createDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.globalClusterSelfManagedSharding">globalClusterSelfManagedSharding</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList">DataMongodbatlasAdvancedClustersResultsLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.mongoDbVersion">mongoDbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.paused">paused</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.pitEnabled">pitEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.replicationSpecs">replicationSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.rootCertType">rootCertType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.stateName">stateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList">DataMongodbatlasAdvancedClustersResultsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResults">DataMongodbatlasAdvancedClustersResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedConfiguration`<sup>Required</sup> <a name="advancedConfiguration" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.advancedConfiguration"></a>

```typescript
public readonly advancedConfiguration: DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList">DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList</a>

---

##### `backupEnabled`<sup>Required</sup> <a name="backupEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.backupEnabled"></a>

```typescript
public readonly backupEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `biConnectorConfig`<sup>Required</sup> <a name="biConnectorConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.biConnectorConfig"></a>

```typescript
public readonly biConnectorConfig: DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList">DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList</a>

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: DataMongodbatlasAdvancedClustersResultsConnectionStringsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList">DataMongodbatlasAdvancedClustersResultsConnectionStringsList</a>

---

##### `createDate`<sup>Required</sup> <a name="createDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.createDate"></a>

```typescript
public readonly createDate: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `encryptionAtRestProvider`<sup>Required</sup> <a name="encryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.encryptionAtRestProvider"></a>

```typescript
public readonly encryptionAtRestProvider: string;
```

- *Type:* string

---

##### `globalClusterSelfManagedSharding`<sup>Required</sup> <a name="globalClusterSelfManagedSharding" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.globalClusterSelfManagedSharding"></a>

```typescript
public readonly globalClusterSelfManagedSharding: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.labels"></a>

```typescript
public readonly labels: DataMongodbatlasAdvancedClustersResultsLabelsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList">DataMongodbatlasAdvancedClustersResultsLabelsList</a>

---

##### `mongoDbMajorVersion`<sup>Required</sup> <a name="mongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.mongoDbMajorVersion"></a>

```typescript
public readonly mongoDbMajorVersion: string;
```

- *Type:* string

---

##### `mongoDbVersion`<sup>Required</sup> <a name="mongoDbVersion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.mongoDbVersion"></a>

```typescript
public readonly mongoDbVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.paused"></a>

```typescript
public readonly paused: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `pitEnabled`<sup>Required</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `replicationSpecs`<sup>Required</sup> <a name="replicationSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.replicationSpecs"></a>

```typescript
public readonly replicationSpecs: DataMongodbatlasAdvancedClustersResultsReplicationSpecsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsList</a>

---

##### `rootCertType`<sup>Required</sup> <a name="rootCertType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.rootCertType"></a>

```typescript
public readonly rootCertType: string;
```

- *Type:* string

---

##### `stateName`<sup>Required</sup> <a name="stateName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.stateName"></a>

```typescript
public readonly stateName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataMongodbatlasAdvancedClustersResultsTagsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList">DataMongodbatlasAdvancedClustersResultsTagsList</a>

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `versionReleaseSystem`<sup>Required</sup> <a name="versionReleaseSystem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.versionReleaseSystem"></a>

```typescript
public readonly versionReleaseSystem: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResults">DataMongodbatlasAdvancedClustersResults</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.containerId">containerId</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.numShards">numShards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.regionConfigs">regionConfigs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.containerId"></a>

```typescript
public readonly containerId: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

---

##### `regionConfigs`<sup>Required</sup> <a name="regionConfigs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.regionConfigs"></a>

```typescript
public readonly regionConfigs: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList</a>

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsReplicationSpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecs</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabled">computeEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSize">computeMaxInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSize">computeMinInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabled">computeScaleDownEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabled">diskGbEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeEnabled`<sup>Required</sup> <a name="computeEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabled"></a>

```typescript
public readonly computeEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `computeMaxInstanceSize`<sup>Required</sup> <a name="computeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSize"></a>

```typescript
public readonly computeMaxInstanceSize: string;
```

- *Type:* string

---

##### `computeMinInstanceSize`<sup>Required</sup> <a name="computeMinInstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSize"></a>

```typescript
public readonly computeMinInstanceSize: string;
```

- *Type:* string

---

##### `computeScaleDownEnabled`<sup>Required</sup> <a name="computeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabled"></a>

```typescript
public readonly computeScaleDownEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `diskGbEnabled`<sup>Required</sup> <a name="diskGbEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabled"></a>

```typescript
public readonly diskGbEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIops">diskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSize">instanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskIops`<sup>Required</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabled">computeEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSize">computeMaxInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSize">computeMinInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabled">computeScaleDownEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabled">diskGbEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeEnabled`<sup>Required</sup> <a name="computeEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabled"></a>

```typescript
public readonly computeEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `computeMaxInstanceSize`<sup>Required</sup> <a name="computeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSize"></a>

```typescript
public readonly computeMaxInstanceSize: string;
```

- *Type:* string

---

##### `computeMinInstanceSize`<sup>Required</sup> <a name="computeMinInstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSize"></a>

```typescript
public readonly computeMinInstanceSize: string;
```

- *Type:* string

---

##### `computeScaleDownEnabled`<sup>Required</sup> <a name="computeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabled"></a>

```typescript
public readonly computeScaleDownEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `diskGbEnabled`<sup>Required</sup> <a name="diskGbEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabled"></a>

```typescript
public readonly diskGbEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIops">diskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSize">instanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskIops`<sup>Required</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScaling">analyticsAutoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecs">analyticsSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.backingProviderName">backingProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.electableSpecs">electableSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecs">readOnlySpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analyticsAutoScaling`<sup>Required</sup> <a name="analyticsAutoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScaling"></a>

```typescript
public readonly analyticsAutoScaling: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList</a>

---

##### `analyticsSpecs`<sup>Required</sup> <a name="analyticsSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecs"></a>

```typescript
public readonly analyticsSpecs: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList</a>

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.autoScaling"></a>

```typescript
public readonly autoScaling: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList</a>

---

##### `backingProviderName`<sup>Required</sup> <a name="backingProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.backingProviderName"></a>

```typescript
public readonly backingProviderName: string;
```

- *Type:* string

---

##### `electableSpecs`<sup>Required</sup> <a name="electableSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.electableSpecs"></a>

```typescript
public readonly electableSpecs: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `readOnlySpecs`<sup>Required</sup> <a name="readOnlySpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecs"></a>

```typescript
public readonly readOnlySpecs: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList</a>

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIops">diskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSize">instanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskIops`<sup>Required</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs</a>

---


### DataMongodbatlasAdvancedClustersResultsTagsList <a name="DataMongodbatlasAdvancedClustersResultsTagsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClustersResultsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClustersResultsTagsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsTagsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTags">DataMongodbatlasAdvancedClustersResultsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClustersResultsTags;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTags">DataMongodbatlasAdvancedClustersResultsTags</a>

---



