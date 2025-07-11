# `dataMongodbatlasApiKeyProjectAssignments` Submodule <a name="`dataMongodbatlasApiKeyProjectAssignments` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasApiKeyProjectAssignments <a name="DataMongodbatlasApiKeyProjectAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/api_key_project_assignments mongodbatlas_api_key_project_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.Initializer"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignments } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments(scope: Construct, id: string, config: DataMongodbatlasApiKeyProjectAssignmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig">DataMongodbatlasApiKeyProjectAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig">DataMongodbatlasApiKeyProjectAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasApiKeyProjectAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.isConstruct"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignments } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.isTerraformElement"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignments } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignments } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignments } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasApiKeyProjectAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasApiKeyProjectAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasApiKeyProjectAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/api_key_project_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasApiKeyProjectAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList">DataMongodbatlasApiKeyProjectAssignmentsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.results"></a>

```typescript
public readonly results: DataMongodbatlasApiKeyProjectAssignmentsResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList">DataMongodbatlasApiKeyProjectAssignmentsResultsList</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasApiKeyProjectAssignmentsConfig <a name="DataMongodbatlasApiKeyProjectAssignmentsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.Initializer"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignments } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasApiKeyProjectAssignmentsConfig: dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/api_key_project_assignments#project_id DataMongodbatlasApiKeyProjectAssignments#project_id}

---

### DataMongodbatlasApiKeyProjectAssignmentsResults <a name="DataMongodbatlasApiKeyProjectAssignmentsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResults.Initializer"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignments } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasApiKeyProjectAssignmentsResults: dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResults = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasApiKeyProjectAssignmentsResultsList <a name="DataMongodbatlasApiKeyProjectAssignmentsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignments } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference <a name="DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignments } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResults">DataMongodbatlasApiKeyProjectAssignmentsResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasApiKeyProjectAssignmentsResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignments.DataMongodbatlasApiKeyProjectAssignmentsResults">DataMongodbatlasApiKeyProjectAssignmentsResults</a>

---



