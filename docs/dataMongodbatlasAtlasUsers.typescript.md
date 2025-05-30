# `dataMongodbatlasAtlasUsers` Submodule <a name="`dataMongodbatlasAtlasUsers` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAtlasUsers <a name="DataMongodbatlasAtlasUsers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/atlas_users mongodbatlas_atlas_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.Initializer"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers(scope: Construct, id: string, config?: DataMongodbatlasAtlasUsersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig">DataMongodbatlasAtlasUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig">DataMongodbatlasAtlasUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.resetItemsPerPage">resetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.resetPageNum">resetPageNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.resetTeamId">resetTeamId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetItemsPerPage` <a name="resetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.resetItemsPerPage"></a>

```typescript
public resetItemsPerPage(): void
```

##### `resetOrgId` <a name="resetOrgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

##### `resetPageNum` <a name="resetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.resetPageNum"></a>

```typescript
public resetPageNum(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTeamId` <a name="resetTeamId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.resetTeamId"></a>

```typescript
public resetTeamId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasAtlasUsers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.isConstruct"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.isTerraformElement"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasAtlasUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasAtlasUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasAtlasUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/atlas_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasAtlasUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList">DataMongodbatlasAtlasUsersResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.totalCount">totalCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.itemsPerPageInput">itemsPerPageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.pageNumInput">pageNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.pageNum">pageNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.results"></a>

```typescript
public readonly results: DataMongodbatlasAtlasUsersResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList">DataMongodbatlasAtlasUsersResultsList</a>

---

##### `totalCount`<sup>Required</sup> <a name="totalCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.totalCount"></a>

```typescript
public readonly totalCount: number;
```

- *Type:* number

---

##### `itemsPerPageInput`<sup>Optional</sup> <a name="itemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.itemsPerPageInput"></a>

```typescript
public readonly itemsPerPageInput: number;
```

- *Type:* number

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `pageNumInput`<sup>Optional</sup> <a name="pageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.pageNumInput"></a>

```typescript
public readonly pageNumInput: number;
```

- *Type:* number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `pageNum`<sup>Required</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.pageNum"></a>

```typescript
public readonly pageNum: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAtlasUsersConfig <a name="DataMongodbatlasAtlasUsersConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.Initializer"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAtlasUsersConfig: dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/atlas_users#items_per_page DataMongodbatlasAtlasUsers#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.orgId">orgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/atlas_users#org_id DataMongodbatlasAtlasUsers#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.pageNum">pageNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/atlas_users#page_num DataMongodbatlasAtlasUsers#page_num}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/atlas_users#project_id DataMongodbatlasAtlasUsers#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.teamId">teamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/atlas_users#team_id DataMongodbatlasAtlasUsers#team_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `itemsPerPage`<sup>Optional</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/atlas_users#items_per_page DataMongodbatlasAtlasUsers#items_per_page}.

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/atlas_users#org_id DataMongodbatlasAtlasUsers#org_id}.

---

##### `pageNum`<sup>Optional</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.pageNum"></a>

```typescript
public readonly pageNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/atlas_users#page_num DataMongodbatlasAtlasUsers#page_num}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/atlas_users#project_id DataMongodbatlasAtlasUsers#project_id}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/atlas_users#team_id DataMongodbatlasAtlasUsers#team_id}.

---

### DataMongodbatlasAtlasUsersResults <a name="DataMongodbatlasAtlasUsersResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResults.Initializer"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAtlasUsersResults: dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResults = { ... }
```


### DataMongodbatlasAtlasUsersResultsLinks <a name="DataMongodbatlasAtlasUsersResultsLinks" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinks.Initializer"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAtlasUsersResultsLinks: dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinks = { ... }
```


### DataMongodbatlasAtlasUsersResultsRoles <a name="DataMongodbatlasAtlasUsersResultsRoles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRoles.Initializer"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAtlasUsersResultsRoles: dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRoles = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasAtlasUsersResultsLinksList <a name="DataMongodbatlasAtlasUsersResultsLinksList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.Initializer"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAtlasUsersResultsLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAtlasUsersResultsLinksOutputReference <a name="DataMongodbatlasAtlasUsersResultsLinksOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.property.href">href</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.property.rel">rel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinks">DataMongodbatlasAtlasUsersResultsLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `href`<sup>Required</sup> <a name="href" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.property.href"></a>

```typescript
public readonly href: string;
```

- *Type:* string

---

##### `rel`<sup>Required</sup> <a name="rel" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.property.rel"></a>

```typescript
public readonly rel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAtlasUsersResultsLinks;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinks">DataMongodbatlasAtlasUsersResultsLinks</a>

---


### DataMongodbatlasAtlasUsersResultsList <a name="DataMongodbatlasAtlasUsersResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAtlasUsersResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAtlasUsersResultsOutputReference <a name="DataMongodbatlasAtlasUsersResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.lastAuth">lastAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.links">links</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList">DataMongodbatlasAtlasUsersResultsLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.mobileNumber">mobileNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList">DataMongodbatlasAtlasUsersResultsRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.teamIds">teamIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResults">DataMongodbatlasAtlasUsersResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastAuth`<sup>Required</sup> <a name="lastAuth" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.lastAuth"></a>

```typescript
public readonly lastAuth: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.links"></a>

```typescript
public readonly links: DataMongodbatlasAtlasUsersResultsLinksList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsLinksList">DataMongodbatlasAtlasUsersResultsLinksList</a>

---

##### `mobileNumber`<sup>Required</sup> <a name="mobileNumber" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.mobileNumber"></a>

```typescript
public readonly mobileNumber: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.roles"></a>

```typescript
public readonly roles: DataMongodbatlasAtlasUsersResultsRolesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList">DataMongodbatlasAtlasUsersResultsRolesList</a>

---

##### `teamIds`<sup>Required</sup> <a name="teamIds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.teamIds"></a>

```typescript
public readonly teamIds: string[];
```

- *Type:* string[]

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAtlasUsersResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResults">DataMongodbatlasAtlasUsersResults</a>

---


### DataMongodbatlasAtlasUsersResultsRolesList <a name="DataMongodbatlasAtlasUsersResultsRolesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.Initializer"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAtlasUsersResultsRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAtlasUsersResultsRolesOutputReference <a name="DataMongodbatlasAtlasUsersResultsRolesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAtlasUsers } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRoles">DataMongodbatlasAtlasUsersResultsRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAtlasUsersResultsRoles;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAtlasUsers.DataMongodbatlasAtlasUsersResultsRoles">DataMongodbatlasAtlasUsersResultsRoles</a>

---



