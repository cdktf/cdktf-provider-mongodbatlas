# `data_mongodbatlas_federated_database_instances`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_federated_database_instances`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/federated_database_instances).

# `dataMongodbatlasFederatedDatabaseInstances` Submodule <a name="`dataMongodbatlasFederatedDatabaseInstances` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedDatabaseInstances <a name="DataMongodbatlasFederatedDatabaseInstances" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/federated_database_instances mongodbatlas_federated_database_instances}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances(scope: Construct, id: string, config: DataMongodbatlasFederatedDatabaseInstancesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig">DataMongodbatlasFederatedDatabaseInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig">DataMongodbatlasFederatedDatabaseInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isConstruct"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformElement"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList">DataMongodbatlasFederatedDatabaseInstancesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.results"></a>

```typescript
public readonly results: DataMongodbatlasFederatedDatabaseInstancesResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList">DataMongodbatlasFederatedDatabaseInstancesResultsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedDatabaseInstancesConfig <a name="DataMongodbatlasFederatedDatabaseInstancesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstancesConfig: dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/federated_database_instances#project_id DataMongodbatlasFederatedDatabaseInstances#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/federated_database_instances#id DataMongodbatlasFederatedDatabaseInstances#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/federated_database_instances#project_id DataMongodbatlasFederatedDatabaseInstances#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/federated_database_instances#id DataMongodbatlasFederatedDatabaseInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasFederatedDatabaseInstancesResults <a name="DataMongodbatlasFederatedDatabaseInstancesResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResults.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstancesResults: dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResults = { ... }
```


### DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig <a name="DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig: dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig = { ... }
```


### DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws <a name="DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws: dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws = { ... }
```


### DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion <a name="DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion: dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion = { ... }
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases: dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases = { ... }
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections: dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections = { ... }
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources: dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources = { ... }
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews: dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews = { ... }
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstancesResultsStorageStores: dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores = { ... }
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference: dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference = { ... }
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTags <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTags.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTags: dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.iamAssumedRoleArn">iamAssumedRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.iamUserArn">iamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.testS3Bucket">testS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `iamAssumedRoleArn`<sup>Required</sup> <a name="iamAssumedRoleArn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.iamAssumedRoleArn"></a>

```typescript
public readonly iamAssumedRoleArn: string;
```

- *Type:* string

---

##### `iamUserArn`<sup>Required</sup> <a name="iamUserArn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.iamUserArn"></a>

```typescript
public readonly iamUserArn: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `testS3Bucket`<sup>Required</sup> <a name="testS3Bucket" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.testS3Bucket"></a>

```typescript
public readonly testS3Bucket: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.aws"></a>

```typescript
public readonly aws: DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion">DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion">DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.cloudProviderConfig">cloudProviderConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.dataProcessRegion">dataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList">DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.storageDatabases">storageDatabases</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.storageStores">storageStores</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResults">DataMongodbatlasFederatedDatabaseInstancesResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudProviderConfig`<sup>Required</sup> <a name="cloudProviderConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.cloudProviderConfig"></a>

```typescript
public readonly cloudProviderConfig: DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList</a>

---

##### `dataProcessRegion`<sup>Required</sup> <a name="dataProcessRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.dataProcessRegion"></a>

```typescript
public readonly dataProcessRegion: DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList">DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList</a>

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageDatabases`<sup>Required</sup> <a name="storageDatabases" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.storageDatabases"></a>

```typescript
public readonly storageDatabases: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList</a>

---

##### `storageStores`<sup>Required</sup> <a name="storageStores" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.storageStores"></a>

```typescript
public readonly storageStores: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstancesResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResults">DataMongodbatlasFederatedDatabaseInstancesResults</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.allowInsecure">allowInsecure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.collection">collection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.collectionRegex">collectionRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.databaseRegex">databaseRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.defaultFormat">defaultFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.provenanceFieldName">provenanceFieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.storeName">storeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.urls">urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.allowInsecure"></a>

```typescript
public readonly allowInsecure: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.collection"></a>

```typescript
public readonly collection: string;
```

- *Type:* string

---

##### `collectionRegex`<sup>Required</sup> <a name="collectionRegex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.collectionRegex"></a>

```typescript
public readonly collectionRegex: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `databaseRegex`<sup>Required</sup> <a name="databaseRegex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.databaseRegex"></a>

```typescript
public readonly databaseRegex: string;
```

- *Type:* string

---

##### `defaultFormat`<sup>Required</sup> <a name="defaultFormat" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.defaultFormat"></a>

```typescript
public readonly defaultFormat: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `provenanceFieldName`<sup>Required</sup> <a name="provenanceFieldName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.provenanceFieldName"></a>

```typescript
public readonly provenanceFieldName: string;
```

- *Type:* string

---

##### `storeName`<sup>Required</sup> <a name="storeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.storeName"></a>

```typescript
public readonly storeName: string;
```

- *Type:* string

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.urls"></a>

```typescript
public readonly urls: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.dataSources">dataSources</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.dataSources"></a>

```typescript
public readonly dataSources: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.collections">collections</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.maxWildcardCollections">maxWildcardCollections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.views">views</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collections`<sup>Required</sup> <a name="collections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.collections"></a>

```typescript
public readonly collections: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList</a>

---

##### `maxWildcardCollections`<sup>Required</sup> <a name="maxWildcardCollections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.maxWildcardCollections"></a>

```typescript
public readonly maxWildcardCollections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `views`<sup>Required</sup> <a name="views" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.views"></a>

```typescript
public readonly views: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.pipeline">pipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.pipeline"></a>

```typescript
public readonly pipeline: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.additionalStorageClasses">additionalStorageClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.allowInsecure">allowInsecure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.defaultFormat">defaultFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.includeTags">includeTags</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.public">public</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.readPreference">readPreference</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.urls">urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalStorageClasses`<sup>Required</sup> <a name="additionalStorageClasses" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.additionalStorageClasses"></a>

```typescript
public readonly additionalStorageClasses: string[];
```

- *Type:* string[]

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.allowInsecure"></a>

```typescript
public readonly allowInsecure: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `defaultFormat`<sup>Required</sup> <a name="defaultFormat" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.defaultFormat"></a>

```typescript
public readonly defaultFormat: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `includeTags`<sup>Required</sup> <a name="includeTags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.includeTags"></a>

```typescript
public readonly includeTags: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.public"></a>

```typescript
public readonly public: string;
```

- *Type:* string

---

##### `readPreference`<sup>Required</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.readPreference"></a>

```typescript
public readonly readPreference: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.urls"></a>

```typescript
public readonly urls: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.maxStalenessSeconds">maxStalenessSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxStalenessSeconds`<sup>Required</sup> <a name="maxStalenessSeconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.maxStalenessSeconds"></a>

```typescript
public readonly maxStalenessSeconds: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.tags"></a>

```typescript
public readonly tags: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstances } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTags">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTags;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTags">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTags</a>

---



