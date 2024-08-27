# `dataMongodbatlasNetworkPeerings` Submodule <a name="`dataMongodbatlasNetworkPeerings` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasNetworkPeerings <a name="DataMongodbatlasNetworkPeerings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/network_peerings mongodbatlas_network_peerings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.Initializer"></a>

```typescript
import { dataMongodbatlasNetworkPeerings } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings(scope: Construct, id: string, config: DataMongodbatlasNetworkPeeringsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig">DataMongodbatlasNetworkPeeringsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig">DataMongodbatlasNetworkPeeringsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasNetworkPeerings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.isConstruct"></a>

```typescript
import { dataMongodbatlasNetworkPeerings } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.isTerraformElement"></a>

```typescript
import { dataMongodbatlasNetworkPeerings } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasNetworkPeerings } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasNetworkPeerings } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasNetworkPeerings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasNetworkPeerings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasNetworkPeerings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/network_peerings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasNetworkPeerings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList">DataMongodbatlasNetworkPeeringsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.results"></a>

```typescript
public readonly results: DataMongodbatlasNetworkPeeringsResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList">DataMongodbatlasNetworkPeeringsResultsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeerings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasNetworkPeeringsConfig <a name="DataMongodbatlasNetworkPeeringsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.Initializer"></a>

```typescript
import { dataMongodbatlasNetworkPeerings } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasNetworkPeeringsConfig: dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/network_peerings#project_id DataMongodbatlasNetworkPeerings#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/network_peerings#id DataMongodbatlasNetworkPeerings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/network_peerings#project_id DataMongodbatlasNetworkPeerings#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/network_peerings#id DataMongodbatlasNetworkPeerings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasNetworkPeeringsResults <a name="DataMongodbatlasNetworkPeeringsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResults.Initializer"></a>

```typescript
import { dataMongodbatlasNetworkPeerings } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasNetworkPeeringsResults: dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResults = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasNetworkPeeringsResultsList <a name="DataMongodbatlasNetworkPeeringsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasNetworkPeerings } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasNetworkPeeringsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasNetworkPeeringsResultsOutputReference <a name="DataMongodbatlasNetworkPeeringsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasNetworkPeerings } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.accepterRegionName">accepterRegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.atlasCidrBlock">atlasCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.azureDirectoryId">azureDirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.azureSubscriptionId">azureSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.errorState">errorState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.errorStateName">errorStateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.gcpProjectId">gcpProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.networkName">networkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.peeringId">peeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.routeTableCidrBlock">routeTableCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.statusName">statusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.vnetName">vnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResults">DataMongodbatlasNetworkPeeringsResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accepterRegionName`<sup>Required</sup> <a name="accepterRegionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.accepterRegionName"></a>

```typescript
public readonly accepterRegionName: string;
```

- *Type:* string

---

##### `atlasCidrBlock`<sup>Required</sup> <a name="atlasCidrBlock" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.atlasCidrBlock"></a>

```typescript
public readonly atlasCidrBlock: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `azureDirectoryId`<sup>Required</sup> <a name="azureDirectoryId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.azureDirectoryId"></a>

```typescript
public readonly azureDirectoryId: string;
```

- *Type:* string

---

##### `azureSubscriptionId`<sup>Required</sup> <a name="azureSubscriptionId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.azureSubscriptionId"></a>

```typescript
public readonly azureSubscriptionId: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `errorState`<sup>Required</sup> <a name="errorState" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.errorState"></a>

```typescript
public readonly errorState: string;
```

- *Type:* string

---

##### `errorStateName`<sup>Required</sup> <a name="errorStateName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.errorStateName"></a>

```typescript
public readonly errorStateName: string;
```

- *Type:* string

---

##### `gcpProjectId`<sup>Required</sup> <a name="gcpProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.gcpProjectId"></a>

```typescript
public readonly gcpProjectId: string;
```

- *Type:* string

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.peeringId"></a>

```typescript
public readonly peeringId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `routeTableCidrBlock`<sup>Required</sup> <a name="routeTableCidrBlock" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.routeTableCidrBlock"></a>

```typescript
public readonly routeTableCidrBlock: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusName`<sup>Required</sup> <a name="statusName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.statusName"></a>

```typescript
public readonly statusName: string;
```

- *Type:* string

---

##### `vnetName`<sup>Required</sup> <a name="vnetName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.vnetName"></a>

```typescript
public readonly vnetName: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasNetworkPeeringsResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeerings.DataMongodbatlasNetworkPeeringsResults">DataMongodbatlasNetworkPeeringsResults</a>

---



