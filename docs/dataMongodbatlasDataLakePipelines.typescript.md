# `data_mongodbatlas_data_lake_pipelines`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_data_lake_pipelines`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipelines).

# `dataMongodbatlasDataLakePipelines` Submodule <a name="`dataMongodbatlasDataLakePipelines` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasDataLakePipelines <a name="DataMongodbatlasDataLakePipelines" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipelines mongodbatlas_data_lake_pipelines}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines(scope: Construct, id: string, config: DataMongodbatlasDataLakePipelinesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig">DataMongodbatlasDataLakePipelinesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig">DataMongodbatlasDataLakePipelinesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isConstruct"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformElement"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList">DataMongodbatlasDataLakePipelinesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.results"></a>

```typescript
public readonly results: DataMongodbatlasDataLakePipelinesResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList">DataMongodbatlasDataLakePipelinesResultsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelines.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasDataLakePipelinesConfig <a name="DataMongodbatlasDataLakePipelinesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasDataLakePipelinesConfig: dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipelines#project_id DataMongodbatlasDataLakePipelines#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipelines#id DataMongodbatlasDataLakePipelines#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipelines#project_id DataMongodbatlasDataLakePipelines#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/data_lake_pipelines#id DataMongodbatlasDataLakePipelines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasDataLakePipelinesResults <a name="DataMongodbatlasDataLakePipelinesResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResults.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasDataLakePipelinesResults: dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResults = { ... }
```


### DataMongodbatlasDataLakePipelinesResultsSink <a name="DataMongodbatlasDataLakePipelinesResultsSink" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSink.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasDataLakePipelinesResultsSink: dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSink = { ... }
```


### DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields <a name="DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasDataLakePipelinesResultsSinkPartitionFields: dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields = { ... }
```


### DataMongodbatlasDataLakePipelinesResultsSource <a name="DataMongodbatlasDataLakePipelinesResultsSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSource.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasDataLakePipelinesResultsSource: dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSource = { ... }
```


### DataMongodbatlasDataLakePipelinesResultsTransformations <a name="DataMongodbatlasDataLakePipelinesResultsTransformations" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformations.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasDataLakePipelinesResultsTransformations: dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasDataLakePipelinesResultsList <a name="DataMongodbatlasDataLakePipelinesResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasDataLakePipelinesResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasDataLakePipelinesResultsOutputReference <a name="DataMongodbatlasDataLakePipelinesResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.sink">sink</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList">DataMongodbatlasDataLakePipelinesResultsSinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList">DataMongodbatlasDataLakePipelinesResultsSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.transformations">transformations</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList">DataMongodbatlasDataLakePipelinesResultsTransformationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResults">DataMongodbatlasDataLakePipelinesResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `sink`<sup>Required</sup> <a name="sink" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.sink"></a>

```typescript
public readonly sink: DataMongodbatlasDataLakePipelinesResultsSinkList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList">DataMongodbatlasDataLakePipelinesResultsSinkList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.source"></a>

```typescript
public readonly source: DataMongodbatlasDataLakePipelinesResultsSourceList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList">DataMongodbatlasDataLakePipelinesResultsSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `transformations`<sup>Required</sup> <a name="transformations" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.transformations"></a>

```typescript
public readonly transformations: DataMongodbatlasDataLakePipelinesResultsTransformationsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList">DataMongodbatlasDataLakePipelinesResultsTransformationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasDataLakePipelinesResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResults">DataMongodbatlasDataLakePipelinesResults</a>

---


### DataMongodbatlasDataLakePipelinesResultsSinkList <a name="DataMongodbatlasDataLakePipelinesResultsSinkList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.get"></a>

```typescript
public get(index: number): DataMongodbatlasDataLakePipelinesResultsSinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasDataLakePipelinesResultsSinkOutputReference <a name="DataMongodbatlasDataLakePipelinesResultsSinkOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.partitionFields">partitionFields</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList">DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSink">DataMongodbatlasDataLakePipelinesResultsSink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionFields`<sup>Required</sup> <a name="partitionFields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.partitionFields"></a>

```typescript
public readonly partitionFields: DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList">DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList</a>

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasDataLakePipelinesResultsSink;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSink">DataMongodbatlasDataLakePipelinesResultsSink</a>

---


### DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList <a name="DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference <a name="DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields">DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields">DataMongodbatlasDataLakePipelinesResultsSinkPartitionFields</a>

---


### DataMongodbatlasDataLakePipelinesResultsSourceList <a name="DataMongodbatlasDataLakePipelinesResultsSourceList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.get"></a>

```typescript
public get(index: number): DataMongodbatlasDataLakePipelinesResultsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasDataLakePipelinesResultsSourceOutputReference <a name="DataMongodbatlasDataLakePipelinesResultsSourceOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.collectionName">collectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSource">DataMongodbatlasDataLakePipelinesResultsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `collectionName`<sup>Required</sup> <a name="collectionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.collectionName"></a>

```typescript
public readonly collectionName: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasDataLakePipelinesResultsSource;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsSource">DataMongodbatlasDataLakePipelinesResultsSource</a>

---


### DataMongodbatlasDataLakePipelinesResultsTransformationsList <a name="DataMongodbatlasDataLakePipelinesResultsTransformationsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference <a name="DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelines } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformations">DataMongodbatlasDataLakePipelinesResultsTransformations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasDataLakePipelinesResultsTransformations;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelines.DataMongodbatlasDataLakePipelinesResultsTransformations">DataMongodbatlasDataLakePipelinesResultsTransformations</a>

---



