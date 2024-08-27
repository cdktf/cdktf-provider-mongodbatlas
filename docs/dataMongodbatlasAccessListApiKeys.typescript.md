# `dataMongodbatlasAccessListApiKeys` Submodule <a name="`dataMongodbatlasAccessListApiKeys` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAccessListApiKeys <a name="DataMongodbatlasAccessListApiKeys" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/access_list_api_keys mongodbatlas_access_list_api_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer"></a>

```typescript
import { dataMongodbatlasAccessListApiKeys } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys(scope: Construct, id: string, config: DataMongodbatlasAccessListApiKeysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig">DataMongodbatlasAccessListApiKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig">DataMongodbatlasAccessListApiKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetItemsPerPage">resetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetPageNum">resetPageNum</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetId"></a>

```typescript
public resetId(): void
```

##### `resetItemsPerPage` <a name="resetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetItemsPerPage"></a>

```typescript
public resetItemsPerPage(): void
```

##### `resetPageNum` <a name="resetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetPageNum"></a>

```typescript
public resetPageNum(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasAccessListApiKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isConstruct"></a>

```typescript
import { dataMongodbatlasAccessListApiKeys } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformElement"></a>

```typescript
import { dataMongodbatlasAccessListApiKeys } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasAccessListApiKeys } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasAccessListApiKeys } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasAccessListApiKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasAccessListApiKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasAccessListApiKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/access_list_api_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasAccessListApiKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList">DataMongodbatlasAccessListApiKeysResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.apiKeyIdInput">apiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.itemsPerPageInput">itemsPerPageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.pageNumInput">pageNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.pageNum">pageNum</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.results"></a>

```typescript
public readonly results: DataMongodbatlasAccessListApiKeysResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList">DataMongodbatlasAccessListApiKeysResultsList</a>

---

##### `apiKeyIdInput`<sup>Optional</sup> <a name="apiKeyIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.apiKeyIdInput"></a>

```typescript
public readonly apiKeyIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `itemsPerPageInput`<sup>Optional</sup> <a name="itemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.itemsPerPageInput"></a>

```typescript
public readonly itemsPerPageInput: number;
```

- *Type:* number

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `pageNumInput`<sup>Optional</sup> <a name="pageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.pageNumInput"></a>

```typescript
public readonly pageNumInput: number;
```

- *Type:* number

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `pageNum`<sup>Required</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.pageNum"></a>

```typescript
public readonly pageNum: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAccessListApiKeysConfig <a name="DataMongodbatlasAccessListApiKeysConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.Initializer"></a>

```typescript
import { dataMongodbatlasAccessListApiKeys } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAccessListApiKeysConfig: dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/access_list_api_keys#api_key_id DataMongodbatlasAccessListApiKeys#api_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.orgId">orgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/access_list_api_keys#org_id DataMongodbatlasAccessListApiKeys#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/access_list_api_keys#id DataMongodbatlasAccessListApiKeys#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/access_list_api_keys#items_per_page DataMongodbatlasAccessListApiKeys#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.pageNum">pageNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/access_list_api_keys#page_num DataMongodbatlasAccessListApiKeys#page_num}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/access_list_api_keys#api_key_id DataMongodbatlasAccessListApiKeys#api_key_id}.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/access_list_api_keys#org_id DataMongodbatlasAccessListApiKeys#org_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/access_list_api_keys#id DataMongodbatlasAccessListApiKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `itemsPerPage`<sup>Optional</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/access_list_api_keys#items_per_page DataMongodbatlasAccessListApiKeys#items_per_page}.

---

##### `pageNum`<sup>Optional</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.pageNum"></a>

```typescript
public readonly pageNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/access_list_api_keys#page_num DataMongodbatlasAccessListApiKeys#page_num}.

---

### DataMongodbatlasAccessListApiKeysResults <a name="DataMongodbatlasAccessListApiKeysResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults.Initializer"></a>

```typescript
import { dataMongodbatlasAccessListApiKeys } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAccessListApiKeysResults: dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasAccessListApiKeysResultsList <a name="DataMongodbatlasAccessListApiKeysResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasAccessListApiKeys } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAccessListApiKeysResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAccessListApiKeysResultsOutputReference <a name="DataMongodbatlasAccessListApiKeysResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAccessListApiKeys } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.accessCount">accessCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.lastUsed">lastUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.lastUsedAddress">lastUsedAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults">DataMongodbatlasAccessListApiKeysResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessCount`<sup>Required</sup> <a name="accessCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.accessCount"></a>

```typescript
public readonly accessCount: number;
```

- *Type:* number

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `lastUsed`<sup>Required</sup> <a name="lastUsed" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.lastUsed"></a>

```typescript
public readonly lastUsed: string;
```

- *Type:* string

---

##### `lastUsedAddress`<sup>Required</sup> <a name="lastUsedAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.lastUsedAddress"></a>

```typescript
public readonly lastUsedAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAccessListApiKeysResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults">DataMongodbatlasAccessListApiKeysResults</a>

---



