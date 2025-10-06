# `dataMongodbatlasApiKeyProjectAssignment` Submodule <a name="`dataMongodbatlasApiKeyProjectAssignment` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasApiKeyProjectAssignment <a name="DataMongodbatlasApiKeyProjectAssignment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/api_key_project_assignment mongodbatlas_api_key_project_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.Initializer"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignment } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment(scope: Construct, id: string, config: DataMongodbatlasApiKeyProjectAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig">DataMongodbatlasApiKeyProjectAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig">DataMongodbatlasApiKeyProjectAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasApiKeyProjectAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.isConstruct"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignment } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.isTerraformElement"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignment } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignment } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignment } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasApiKeyProjectAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasApiKeyProjectAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasApiKeyProjectAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/api_key_project_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasApiKeyProjectAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.apiKeyIdInput">apiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `apiKeyIdInput`<sup>Optional</sup> <a name="apiKeyIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.apiKeyIdInput"></a>

```typescript
public readonly apiKeyIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasApiKeyProjectAssignmentConfig <a name="DataMongodbatlasApiKeyProjectAssignmentConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.Initializer"></a>

```typescript
import { dataMongodbatlasApiKeyProjectAssignment } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasApiKeyProjectAssignmentConfig: dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies this organization API key that you want to assign to one project. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies this organization API key that you want to assign to one project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/api_key_project_assignment#api_key_id DataMongodbatlasApiKeyProjectAssignment#api_key_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasApiKeyProjectAssignment.DataMongodbatlasApiKeyProjectAssignmentConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/api_key_project_assignment#project_id DataMongodbatlasApiKeyProjectAssignment#project_id}

---



