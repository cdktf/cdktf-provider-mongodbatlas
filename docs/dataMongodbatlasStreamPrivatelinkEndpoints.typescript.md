# `dataMongodbatlasStreamPrivatelinkEndpoints` Submodule <a name="`dataMongodbatlasStreamPrivatelinkEndpoints` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasStreamPrivatelinkEndpoints <a name="DataMongodbatlasStreamPrivatelinkEndpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/stream_privatelink_endpoints mongodbatlas_stream_privatelink_endpoints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer"></a>

```typescript
import { dataMongodbatlasStreamPrivatelinkEndpoints } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints(scope: Construct, id: string, config: DataMongodbatlasStreamPrivatelinkEndpointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig">DataMongodbatlasStreamPrivatelinkEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig">DataMongodbatlasStreamPrivatelinkEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasStreamPrivatelinkEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isConstruct"></a>

```typescript
import { dataMongodbatlasStreamPrivatelinkEndpoints } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformElement"></a>

```typescript
import { dataMongodbatlasStreamPrivatelinkEndpoints } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasStreamPrivatelinkEndpoints } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasStreamPrivatelinkEndpoints } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasStreamPrivatelinkEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasStreamPrivatelinkEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasStreamPrivatelinkEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/stream_privatelink_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasStreamPrivatelinkEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList">DataMongodbatlasStreamPrivatelinkEndpointsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.results"></a>

```typescript
public readonly results: DataMongodbatlasStreamPrivatelinkEndpointsResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList">DataMongodbatlasStreamPrivatelinkEndpointsResultsList</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasStreamPrivatelinkEndpointsConfig <a name="DataMongodbatlasStreamPrivatelinkEndpointsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.Initializer"></a>

```typescript
import { dataMongodbatlasStreamPrivatelinkEndpoints } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasStreamPrivatelinkEndpointsConfig: dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/stream_privatelink_endpoints#project_id DataMongodbatlasStreamPrivatelinkEndpoints#project_id}

---

### DataMongodbatlasStreamPrivatelinkEndpointsResults <a name="DataMongodbatlasStreamPrivatelinkEndpointsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults.Initializer"></a>

```typescript
import { dataMongodbatlasStreamPrivatelinkEndpoints } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasStreamPrivatelinkEndpointsResults: dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasStreamPrivatelinkEndpointsResultsList <a name="DataMongodbatlasStreamPrivatelinkEndpointsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasStreamPrivatelinkEndpoints } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference <a name="DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasStreamPrivatelinkEndpoints } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.dnsDomain">dnsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.dnsSubDomain">dnsSubDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.interfaceEndpointId">interfaceEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.serviceEndpointId">serviceEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults">DataMongodbatlasStreamPrivatelinkEndpointsResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsDomain`<sup>Required</sup> <a name="dnsDomain" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.dnsDomain"></a>

```typescript
public readonly dnsDomain: string;
```

- *Type:* string

---

##### `dnsSubDomain`<sup>Required</sup> <a name="dnsSubDomain" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.dnsSubDomain"></a>

```typescript
public readonly dnsSubDomain: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interfaceEndpointId`<sup>Required</sup> <a name="interfaceEndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.interfaceEndpointId"></a>

```typescript
public readonly interfaceEndpointId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceEndpointId`<sup>Required</sup> <a name="serviceEndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.serviceEndpointId"></a>

```typescript
public readonly serviceEndpointId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasStreamPrivatelinkEndpointsResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults">DataMongodbatlasStreamPrivatelinkEndpointsResults</a>

---



