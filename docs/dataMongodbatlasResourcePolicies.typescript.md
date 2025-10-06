# `dataMongodbatlasResourcePolicies` Submodule <a name="`dataMongodbatlasResourcePolicies` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasResourcePolicies <a name="DataMongodbatlasResourcePolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/resource_policies mongodbatlas_resource_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies(scope: Construct, id: string, config: DataMongodbatlasResourcePoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig">DataMongodbatlasResourcePoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig">DataMongodbatlasResourcePoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasResourcePolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isConstruct"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformElement"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasResourcePolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasResourcePolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasResourcePolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/resource_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasResourcePolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.resourcePolicies">resourcePolicies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList">DataMongodbatlasResourcePoliciesResourcePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList">DataMongodbatlasResourcePoliciesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: DataMongodbatlasResourcePoliciesResourcePoliciesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList">DataMongodbatlasResourcePoliciesResourcePoliciesList</a>

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.results"></a>

```typescript
public readonly results: DataMongodbatlasResourcePoliciesResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList">DataMongodbatlasResourcePoliciesResultsList</a>

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasResourcePoliciesConfig <a name="DataMongodbatlasResourcePoliciesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasResourcePoliciesConfig: dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.orgId">orgId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies the organization that contains your projects.

Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/resource_policies#org_id DataMongodbatlasResourcePolicies#org_id}

---

### DataMongodbatlasResourcePoliciesResourcePolicies <a name="DataMongodbatlasResourcePoliciesResourcePolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasResourcePoliciesResourcePolicies: dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies = { ... }
```


### DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser <a name="DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser: dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser = { ... }
```


### DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser <a name="DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser: dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser = { ... }
```


### DataMongodbatlasResourcePoliciesResourcePoliciesPolicies <a name="DataMongodbatlasResourcePoliciesResourcePoliciesPolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasResourcePoliciesResourcePoliciesPolicies: dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies = { ... }
```


### DataMongodbatlasResourcePoliciesResults <a name="DataMongodbatlasResourcePoliciesResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasResourcePoliciesResults: dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults = { ... }
```


### DataMongodbatlasResourcePoliciesResultsCreatedByUser <a name="DataMongodbatlasResourcePoliciesResultsCreatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasResourcePoliciesResultsCreatedByUser: dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser = { ... }
```


### DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser <a name="DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasResourcePoliciesResultsLastUpdatedByUser: dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser = { ... }
```


### DataMongodbatlasResourcePoliciesResultsPolicies <a name="DataMongodbatlasResourcePoliciesResultsPolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasResourcePoliciesResultsPolicies: dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference <a name="DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser">DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser">DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser</a>

---


### DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference <a name="DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser">DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser">DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser</a>

---


### DataMongodbatlasResourcePoliciesResourcePoliciesList <a name="DataMongodbatlasResourcePoliciesResourcePoliciesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.get"></a>

```typescript
public get(index: number): DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference <a name="DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.createdByUser">createdByUser</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference">DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.lastUpdatedByUser">lastUpdatedByUser</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference">DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList">DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies">DataMongodbatlasResourcePoliciesResourcePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdByUser`<sup>Required</sup> <a name="createdByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.createdByUser"></a>

```typescript
public readonly createdByUser: DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference">DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedByUser`<sup>Required</sup> <a name="lastUpdatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.lastUpdatedByUser"></a>

```typescript
public readonly lastUpdatedByUser: DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference">DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference</a>

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.policies"></a>

```typescript
public readonly policies: DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList">DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasResourcePoliciesResourcePolicies;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies">DataMongodbatlasResourcePoliciesResourcePolicies</a>

---


### DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList <a name="DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.get"></a>

```typescript
public get(index: number): DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference <a name="DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies">DataMongodbatlasResourcePoliciesResourcePoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasResourcePoliciesResourcePoliciesPolicies;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies">DataMongodbatlasResourcePoliciesResourcePoliciesPolicies</a>

---


### DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference <a name="DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser">DataMongodbatlasResourcePoliciesResultsCreatedByUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasResourcePoliciesResultsCreatedByUser;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser">DataMongodbatlasResourcePoliciesResultsCreatedByUser</a>

---


### DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference <a name="DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser">DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser">DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser</a>

---


### DataMongodbatlasResourcePoliciesResultsList <a name="DataMongodbatlasResourcePoliciesResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasResourcePoliciesResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasResourcePoliciesResultsOutputReference <a name="DataMongodbatlasResourcePoliciesResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.createdByUser">createdByUser</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference">DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.lastUpdatedByUser">lastUpdatedByUser</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference">DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList">DataMongodbatlasResourcePoliciesResultsPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults">DataMongodbatlasResourcePoliciesResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdByUser`<sup>Required</sup> <a name="createdByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.createdByUser"></a>

```typescript
public readonly createdByUser: DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference">DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedByUser`<sup>Required</sup> <a name="lastUpdatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.lastUpdatedByUser"></a>

```typescript
public readonly lastUpdatedByUser: DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference">DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference</a>

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.policies"></a>

```typescript
public readonly policies: DataMongodbatlasResourcePoliciesResultsPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList">DataMongodbatlasResourcePoliciesResultsPoliciesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasResourcePoliciesResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults">DataMongodbatlasResourcePoliciesResults</a>

---


### DataMongodbatlasResourcePoliciesResultsPoliciesList <a name="DataMongodbatlasResourcePoliciesResultsPoliciesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.get"></a>

```typescript
public get(index: number): DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference <a name="DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasResourcePolicies } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies">DataMongodbatlasResourcePoliciesResultsPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasResourcePoliciesResultsPolicies;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies">DataMongodbatlasResourcePoliciesResultsPolicies</a>

---



