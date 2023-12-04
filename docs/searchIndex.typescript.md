# `searchIndex` Submodule <a name="`searchIndex` Submodule" id="@cdktf/provider-mongodbatlas.searchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SearchIndex <a name="SearchIndex" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index mongodbatlas_search_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer"></a>

```typescript
import { searchIndex } from '@cdktf/provider-mongodbatlas'

new searchIndex.SearchIndex(scope: Construct, id: string, config: SearchIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig">SearchIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig">SearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.putSynonyms">putSynonyms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetAnalyzer">resetAnalyzer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetAnalyzers">resetAnalyzers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetMappingsDynamic">resetMappingsDynamic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetMappingsFields">resetMappingsFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetSearchAnalyzer">resetSearchAnalyzer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetSynonyms">resetSynonyms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetWaitForIndexBuildCompletion">resetWaitForIndexBuildCompletion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSynonyms` <a name="putSynonyms" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.putSynonyms"></a>

```typescript
public putSynonyms(value: IResolvable | SearchIndexSynonyms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.putSynonyms.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms">SearchIndexSynonyms</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.putTimeouts"></a>

```typescript
public putTimeouts(value: SearchIndexTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts">SearchIndexTimeouts</a>

---

##### `resetAnalyzer` <a name="resetAnalyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetAnalyzer"></a>

```typescript
public resetAnalyzer(): void
```

##### `resetAnalyzers` <a name="resetAnalyzers" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetAnalyzers"></a>

```typescript
public resetAnalyzers(): void
```

##### `resetFields` <a name="resetFields" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMappingsDynamic` <a name="resetMappingsDynamic" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetMappingsDynamic"></a>

```typescript
public resetMappingsDynamic(): void
```

##### `resetMappingsFields` <a name="resetMappingsFields" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetMappingsFields"></a>

```typescript
public resetMappingsFields(): void
```

##### `resetSearchAnalyzer` <a name="resetSearchAnalyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetSearchAnalyzer"></a>

```typescript
public resetSearchAnalyzer(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetType"></a>

```typescript
public resetType(): void
```

##### `resetWaitForIndexBuildCompletion` <a name="resetWaitForIndexBuildCompletion" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.resetWaitForIndexBuildCompletion"></a>

```typescript
public resetWaitForIndexBuildCompletion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SearchIndex resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isConstruct"></a>

```typescript
import { searchIndex } from '@cdktf/provider-mongodbatlas'

searchIndex.SearchIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isTerraformElement"></a>

```typescript
import { searchIndex } from '@cdktf/provider-mongodbatlas'

searchIndex.SearchIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isTerraformResource"></a>

```typescript
import { searchIndex } from '@cdktf/provider-mongodbatlas'

searchIndex.SearchIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.generateConfigForImport"></a>

```typescript
import { searchIndex } from '@cdktf/provider-mongodbatlas'

searchIndex.SearchIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SearchIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SearchIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.synonyms">synonyms</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList">SearchIndexSynonymsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference">SearchIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzerInput">analyzerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzersInput">analyzersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.collectionNameInput">collectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.fieldsInput">fieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsDynamicInput">mappingsDynamicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsFieldsInput">mappingsFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.searchAnalyzerInput">searchAnalyzerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.synonymsInput">synonymsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms">SearchIndexSynonyms</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts">SearchIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.waitForIndexBuildCompletionInput">waitForIndexBuildCompletionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzer">analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzers">analyzers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.collectionName">collectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.fields">fields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsDynamic">mappingsDynamic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsFields">mappingsFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.searchAnalyzer">searchAnalyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.waitForIndexBuildCompletion">waitForIndexBuildCompletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.synonyms"></a>

```typescript
public readonly synonyms: SearchIndexSynonymsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList">SearchIndexSynonymsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.timeouts"></a>

```typescript
public readonly timeouts: SearchIndexTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference">SearchIndexTimeoutsOutputReference</a>

---

##### `analyzerInput`<sup>Optional</sup> <a name="analyzerInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzerInput"></a>

```typescript
public readonly analyzerInput: string;
```

- *Type:* string

---

##### `analyzersInput`<sup>Optional</sup> <a name="analyzersInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzersInput"></a>

```typescript
public readonly analyzersInput: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `collectionNameInput`<sup>Optional</sup> <a name="collectionNameInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.collectionNameInput"></a>

```typescript
public readonly collectionNameInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mappingsDynamicInput`<sup>Optional</sup> <a name="mappingsDynamicInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsDynamicInput"></a>

```typescript
public readonly mappingsDynamicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mappingsFieldsInput`<sup>Optional</sup> <a name="mappingsFieldsInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsFieldsInput"></a>

```typescript
public readonly mappingsFieldsInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `searchAnalyzerInput`<sup>Optional</sup> <a name="searchAnalyzerInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.searchAnalyzerInput"></a>

```typescript
public readonly searchAnalyzerInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: IResolvable | SearchIndexSynonyms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms">SearchIndexSynonyms</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SearchIndexTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts">SearchIndexTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `waitForIndexBuildCompletionInput`<sup>Optional</sup> <a name="waitForIndexBuildCompletionInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.waitForIndexBuildCompletionInput"></a>

```typescript
public readonly waitForIndexBuildCompletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

---

##### `analyzers`<sup>Required</sup> <a name="analyzers" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.analyzers"></a>

```typescript
public readonly analyzers: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `collectionName`<sup>Required</sup> <a name="collectionName" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.collectionName"></a>

```typescript
public readonly collectionName: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.fields"></a>

```typescript
public readonly fields: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mappingsDynamic`<sup>Required</sup> <a name="mappingsDynamic" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsDynamic"></a>

```typescript
public readonly mappingsDynamic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mappingsFields`<sup>Required</sup> <a name="mappingsFields" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.mappingsFields"></a>

```typescript
public readonly mappingsFields: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `searchAnalyzer`<sup>Required</sup> <a name="searchAnalyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.searchAnalyzer"></a>

```typescript
public readonly searchAnalyzer: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `waitForIndexBuildCompletion`<sup>Required</sup> <a name="waitForIndexBuildCompletion" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.waitForIndexBuildCompletion"></a>

```typescript
public readonly waitForIndexBuildCompletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SearchIndexConfig <a name="SearchIndexConfig" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.Initializer"></a>

```typescript
import { searchIndex } from '@cdktf/provider-mongodbatlas'

const searchIndexConfig: searchIndex.SearchIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#cluster_name SearchIndex#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.collectionName">collectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#collection_name SearchIndex#collection_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#database SearchIndex#database}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#name SearchIndex#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#project_id SearchIndex#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.analyzer">analyzer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#analyzer SearchIndex#analyzer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.analyzers">analyzers</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#analyzers SearchIndex#analyzers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.fields">fields</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#fields SearchIndex#fields}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#id SearchIndex#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.mappingsDynamic">mappingsDynamic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#mappings_dynamic SearchIndex#mappings_dynamic}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.mappingsFields">mappingsFields</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#mappings_fields SearchIndex#mappings_fields}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.searchAnalyzer">searchAnalyzer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#search_analyzer SearchIndex#search_analyzer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#status SearchIndex#status}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.synonyms">synonyms</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms">SearchIndexSynonyms</a>[]</code> | synonyms block. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts">SearchIndexTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#type SearchIndex#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.waitForIndexBuildCompletion">waitForIndexBuildCompletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#wait_for_index_build_completion SearchIndex#wait_for_index_build_completion}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#cluster_name SearchIndex#cluster_name}.

---

##### `collectionName`<sup>Required</sup> <a name="collectionName" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.collectionName"></a>

```typescript
public readonly collectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#collection_name SearchIndex#collection_name}.

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#database SearchIndex#database}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#name SearchIndex#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#project_id SearchIndex#project_id}.

---

##### `analyzer`<sup>Optional</sup> <a name="analyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#analyzer SearchIndex#analyzer}.

---

##### `analyzers`<sup>Optional</sup> <a name="analyzers" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.analyzers"></a>

```typescript
public readonly analyzers: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#analyzers SearchIndex#analyzers}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.fields"></a>

```typescript
public readonly fields: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#fields SearchIndex#fields}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#id SearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappingsDynamic`<sup>Optional</sup> <a name="mappingsDynamic" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.mappingsDynamic"></a>

```typescript
public readonly mappingsDynamic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#mappings_dynamic SearchIndex#mappings_dynamic}.

---

##### `mappingsFields`<sup>Optional</sup> <a name="mappingsFields" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.mappingsFields"></a>

```typescript
public readonly mappingsFields: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#mappings_fields SearchIndex#mappings_fields}.

---

##### `searchAnalyzer`<sup>Optional</sup> <a name="searchAnalyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.searchAnalyzer"></a>

```typescript
public readonly searchAnalyzer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#search_analyzer SearchIndex#search_analyzer}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#status SearchIndex#status}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.synonyms"></a>

```typescript
public readonly synonyms: IResolvable | SearchIndexSynonyms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms">SearchIndexSynonyms</a>[]

synonyms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#synonyms SearchIndex#synonyms}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SearchIndexTimeouts;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts">SearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#timeouts SearchIndex#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#type SearchIndex#type}.

---

##### `waitForIndexBuildCompletion`<sup>Optional</sup> <a name="waitForIndexBuildCompletion" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexConfig.property.waitForIndexBuildCompletion"></a>

```typescript
public readonly waitForIndexBuildCompletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#wait_for_index_build_completion SearchIndex#wait_for_index_build_completion}.

---

### SearchIndexSynonyms <a name="SearchIndexSynonyms" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.Initializer"></a>

```typescript
import { searchIndex } from '@cdktf/provider-mongodbatlas'

const searchIndexSynonyms: searchIndex.SearchIndexSynonyms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.property.analyzer">analyzer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#analyzer SearchIndex#analyzer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#name SearchIndex#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.property.sourceCollection">sourceCollection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#source_collection SearchIndex#source_collection}. |

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#analyzer SearchIndex#analyzer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#name SearchIndex#name}.

---

##### `sourceCollection`<sup>Required</sup> <a name="sourceCollection" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms.property.sourceCollection"></a>

```typescript
public readonly sourceCollection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#source_collection SearchIndex#source_collection}.

---

### SearchIndexTimeouts <a name="SearchIndexTimeouts" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts.Initializer"></a>

```typescript
import { searchIndex } from '@cdktf/provider-mongodbatlas'

const searchIndexTimeouts: searchIndex.SearchIndexTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#create SearchIndex#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#delete SearchIndex#delete}. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#update SearchIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#create SearchIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#delete SearchIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/search_index#update SearchIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SearchIndexSynonymsList <a name="SearchIndexSynonymsList" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer"></a>

```typescript
import { searchIndex } from '@cdktf/provider-mongodbatlas'

new searchIndex.SearchIndexSynonymsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.get"></a>

```typescript
public get(index: number): SearchIndexSynonymsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms">SearchIndexSynonyms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SearchIndexSynonyms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms">SearchIndexSynonyms</a>[]

---


### SearchIndexSynonymsOutputReference <a name="SearchIndexSynonymsOutputReference" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer"></a>

```typescript
import { searchIndex } from '@cdktf/provider-mongodbatlas'

new searchIndex.SearchIndexSynonymsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.analyzerInput">analyzerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.sourceCollectionInput">sourceCollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.analyzer">analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.sourceCollection">sourceCollection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms">SearchIndexSynonyms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analyzerInput`<sup>Optional</sup> <a name="analyzerInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.analyzerInput"></a>

```typescript
public readonly analyzerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceCollectionInput`<sup>Optional</sup> <a name="sourceCollectionInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.sourceCollectionInput"></a>

```typescript
public readonly sourceCollectionInput: string;
```

- *Type:* string

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceCollection`<sup>Required</sup> <a name="sourceCollection" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.sourceCollection"></a>

```typescript
public readonly sourceCollection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonymsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SearchIndexSynonyms;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexSynonyms">SearchIndexSynonyms</a>

---


### SearchIndexTimeoutsOutputReference <a name="SearchIndexTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.Initializer"></a>

```typescript
import { searchIndex } from '@cdktf/provider-mongodbatlas'

new searchIndex.SearchIndexTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts">SearchIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SearchIndexTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.searchIndex.SearchIndexTimeouts">SearchIndexTimeouts</a>

---



