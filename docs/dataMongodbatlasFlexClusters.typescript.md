# `dataMongodbatlasFlexClusters` Submodule <a name="`dataMongodbatlasFlexClusters` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFlexClusters <a name="DataMongodbatlasFlexClusters" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/flex_clusters mongodbatlas_flex_clusters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.Initializer"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters(scope: Construct, id: string, config: DataMongodbatlasFlexClustersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig">DataMongodbatlasFlexClustersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig">DataMongodbatlasFlexClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasFlexClusters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.isConstruct"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.isTerraformElement"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasFlexClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasFlexClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasFlexClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/flex_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasFlexClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList">DataMongodbatlasFlexClustersResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.results"></a>

```typescript
public readonly results: DataMongodbatlasFlexClustersResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList">DataMongodbatlasFlexClustersResultsList</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClusters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFlexClustersConfig <a name="DataMongodbatlasFlexClustersConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.Initializer"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFlexClustersConfig: dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal character string that identifies the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal character string that identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/flex_clusters#project_id DataMongodbatlasFlexClusters#project_id}

---

### DataMongodbatlasFlexClustersResults <a name="DataMongodbatlasFlexClustersResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResults.Initializer"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFlexClustersResults: dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResults = { ... }
```


### DataMongodbatlasFlexClustersResultsBackupSettings <a name="DataMongodbatlasFlexClustersResultsBackupSettings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettings.Initializer"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFlexClustersResultsBackupSettings: dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettings = { ... }
```


### DataMongodbatlasFlexClustersResultsConnectionStrings <a name="DataMongodbatlasFlexClustersResultsConnectionStrings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStrings.Initializer"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFlexClustersResultsConnectionStrings: dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStrings = { ... }
```


### DataMongodbatlasFlexClustersResultsProviderSettings <a name="DataMongodbatlasFlexClustersResultsProviderSettings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettings.Initializer"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFlexClustersResultsProviderSettings: dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference <a name="DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettings">DataMongodbatlasFlexClustersResultsBackupSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFlexClustersResultsBackupSettings;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettings">DataMongodbatlasFlexClustersResultsBackupSettings</a>

---


### DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference <a name="DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.property.standard">standard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.property.standardSrv">standardSrv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStrings">DataMongodbatlasFlexClustersResultsConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.property.standard"></a>

```typescript
public readonly standard: string;
```

- *Type:* string

---

##### `standardSrv`<sup>Required</sup> <a name="standardSrv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.property.standardSrv"></a>

```typescript
public readonly standardSrv: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFlexClustersResultsConnectionStrings;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStrings">DataMongodbatlasFlexClustersResultsConnectionStrings</a>

---


### DataMongodbatlasFlexClustersResultsList <a name="DataMongodbatlasFlexClustersResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFlexClustersResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFlexClustersResultsOutputReference <a name="DataMongodbatlasFlexClustersResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.backupSettings">backupSettings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference">DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.connectionStrings">connectionStrings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference">DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.createDate">createDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.mongoDbVersion">mongoDbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.providerSettings">providerSettings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference">DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.stateName">stateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResults">DataMongodbatlasFlexClustersResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupSettings`<sup>Required</sup> <a name="backupSettings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.backupSettings"></a>

```typescript
public readonly backupSettings: DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference">DataMongodbatlasFlexClustersResultsBackupSettingsOutputReference</a>

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference">DataMongodbatlasFlexClustersResultsConnectionStringsOutputReference</a>

---

##### `createDate`<sup>Required</sup> <a name="createDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.createDate"></a>

```typescript
public readonly createDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mongoDbVersion`<sup>Required</sup> <a name="mongoDbVersion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.mongoDbVersion"></a>

```typescript
public readonly mongoDbVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerSettings`<sup>Required</sup> <a name="providerSettings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.providerSettings"></a>

```typescript
public readonly providerSettings: DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference">DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference</a>

---

##### `stateName`<sup>Required</sup> <a name="stateName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.stateName"></a>

```typescript
public readonly stateName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `versionReleaseSystem`<sup>Required</sup> <a name="versionReleaseSystem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.versionReleaseSystem"></a>

```typescript
public readonly versionReleaseSystem: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFlexClustersResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResults">DataMongodbatlasFlexClustersResults</a>

---


### DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference <a name="DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFlexClusters } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.backingProviderName">backingProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettings">DataMongodbatlasFlexClustersResultsProviderSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backingProviderName`<sup>Required</sup> <a name="backingProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.backingProviderName"></a>

```typescript
public readonly backingProviderName: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFlexClustersResultsProviderSettings;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFlexClusters.DataMongodbatlasFlexClustersResultsProviderSettings">DataMongodbatlasFlexClustersResultsProviderSettings</a>

---



