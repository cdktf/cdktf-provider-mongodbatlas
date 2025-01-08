# `dataMongodbatlasProjectApiKeys` Submodule <a name="`dataMongodbatlasProjectApiKeys` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasProjectApiKeys <a name="DataMongodbatlasProjectApiKeys" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/project_api_keys mongodbatlas_project_api_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.Initializer"></a>

```typescript
import { dataMongodbatlasProjectApiKeys } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys(scope: Construct, id: string, config: DataMongodbatlasProjectApiKeysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig">DataMongodbatlasProjectApiKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig">DataMongodbatlasProjectApiKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.resetItemsPerPage">resetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.resetPageNum">resetPageNum</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.resetId"></a>

```typescript
public resetId(): void
```

##### `resetItemsPerPage` <a name="resetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.resetItemsPerPage"></a>

```typescript
public resetItemsPerPage(): void
```

##### `resetPageNum` <a name="resetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.resetPageNum"></a>

```typescript
public resetPageNum(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasProjectApiKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.isConstruct"></a>

```typescript
import { dataMongodbatlasProjectApiKeys } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.isTerraformElement"></a>

```typescript
import { dataMongodbatlasProjectApiKeys } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasProjectApiKeys } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasProjectApiKeys } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasProjectApiKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasProjectApiKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasProjectApiKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/project_api_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasProjectApiKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList">DataMongodbatlasProjectApiKeysResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.itemsPerPageInput">itemsPerPageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.pageNumInput">pageNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.pageNum">pageNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.results"></a>

```typescript
public readonly results: DataMongodbatlasProjectApiKeysResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList">DataMongodbatlasProjectApiKeysResultsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `itemsPerPageInput`<sup>Optional</sup> <a name="itemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.itemsPerPageInput"></a>

```typescript
public readonly itemsPerPageInput: number;
```

- *Type:* number

---

##### `pageNumInput`<sup>Optional</sup> <a name="pageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.pageNumInput"></a>

```typescript
public readonly pageNumInput: number;
```

- *Type:* number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `pageNum`<sup>Required</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.pageNum"></a>

```typescript
public readonly pageNum: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeys.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasProjectApiKeysConfig <a name="DataMongodbatlasProjectApiKeysConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.Initializer"></a>

```typescript
import { dataMongodbatlasProjectApiKeys } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasProjectApiKeysConfig: dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/project_api_keys#project_id DataMongodbatlasProjectApiKeys#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/project_api_keys#id DataMongodbatlasProjectApiKeys#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/project_api_keys#items_per_page DataMongodbatlasProjectApiKeys#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.pageNum">pageNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/project_api_keys#page_num DataMongodbatlasProjectApiKeys#page_num}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/project_api_keys#project_id DataMongodbatlasProjectApiKeys#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/project_api_keys#id DataMongodbatlasProjectApiKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `itemsPerPage`<sup>Optional</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/project_api_keys#items_per_page DataMongodbatlasProjectApiKeys#items_per_page}.

---

##### `pageNum`<sup>Optional</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysConfig.property.pageNum"></a>

```typescript
public readonly pageNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/project_api_keys#page_num DataMongodbatlasProjectApiKeys#page_num}.

---

### DataMongodbatlasProjectApiKeysResults <a name="DataMongodbatlasProjectApiKeysResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResults.Initializer"></a>

```typescript
import { dataMongodbatlasProjectApiKeys } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasProjectApiKeysResults: dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResults = { ... }
```


### DataMongodbatlasProjectApiKeysResultsProjectAssignment <a name="DataMongodbatlasProjectApiKeysResultsProjectAssignment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignment.Initializer"></a>

```typescript
import { dataMongodbatlasProjectApiKeys } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasProjectApiKeysResultsProjectAssignment: dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignment = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasProjectApiKeysResultsList <a name="DataMongodbatlasProjectApiKeysResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasProjectApiKeys } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasProjectApiKeysResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasProjectApiKeysResultsOutputReference <a name="DataMongodbatlasProjectApiKeysResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasProjectApiKeys } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.projectAssignment">projectAssignment</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList">DataMongodbatlasProjectApiKeysResultsProjectAssignmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResults">DataMongodbatlasProjectApiKeysResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `projectAssignment`<sup>Required</sup> <a name="projectAssignment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.projectAssignment"></a>

```typescript
public readonly projectAssignment: DataMongodbatlasProjectApiKeysResultsProjectAssignmentList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList">DataMongodbatlasProjectApiKeysResultsProjectAssignmentList</a>

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasProjectApiKeysResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResults">DataMongodbatlasProjectApiKeysResults</a>

---


### DataMongodbatlasProjectApiKeysResultsProjectAssignmentList <a name="DataMongodbatlasProjectApiKeysResultsProjectAssignmentList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.Initializer"></a>

```typescript
import { dataMongodbatlasProjectApiKeys } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.get"></a>

```typescript
public get(index: number): DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference <a name="DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasProjectApiKeys } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.property.roleNames">roleNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignment">DataMongodbatlasProjectApiKeysResultsProjectAssignment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `roleNames`<sup>Required</sup> <a name="roleNames" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.property.roleNames"></a>

```typescript
public readonly roleNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasProjectApiKeysResultsProjectAssignment;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectApiKeys.DataMongodbatlasProjectApiKeysResultsProjectAssignment">DataMongodbatlasProjectApiKeysResultsProjectAssignment</a>

---



