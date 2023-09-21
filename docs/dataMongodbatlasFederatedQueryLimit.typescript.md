# `data_mongodbatlas_federated_query_limit`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_federated_query_limit`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit).

# `dataMongodbatlasFederatedQueryLimit` Submodule <a name="`dataMongodbatlasFederatedQueryLimit` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedQueryLimit <a name="DataMongodbatlasFederatedQueryLimit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit mongodbatlas_federated_query_limit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedQueryLimit } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit(scope: Construct, id: string, config: DataMongodbatlasFederatedQueryLimitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig">DataMongodbatlasFederatedQueryLimitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig">DataMongodbatlasFederatedQueryLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isConstruct"></a>

```typescript
import { dataMongodbatlasFederatedQueryLimit } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformElement"></a>

```typescript
import { dataMongodbatlasFederatedQueryLimit } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasFederatedQueryLimit } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.currentUsage">currentUsage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.defaultLimit">defaultLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.maximumLimit">maximumLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.overrunPolicy">overrunPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.limitNameInput">limitNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tenantNameInput">tenantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.limitName">limitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tenantName">tenantName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `currentUsage`<sup>Required</sup> <a name="currentUsage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.currentUsage"></a>

```typescript
public readonly currentUsage: number;
```

- *Type:* number

---

##### `defaultLimit`<sup>Required</sup> <a name="defaultLimit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.defaultLimit"></a>

```typescript
public readonly defaultLimit: number;
```

- *Type:* number

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `maximumLimit`<sup>Required</sup> <a name="maximumLimit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.maximumLimit"></a>

```typescript
public readonly maximumLimit: number;
```

- *Type:* number

---

##### `overrunPolicy`<sup>Required</sup> <a name="overrunPolicy" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.overrunPolicy"></a>

```typescript
public readonly overrunPolicy: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitNameInput`<sup>Optional</sup> <a name="limitNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.limitNameInput"></a>

```typescript
public readonly limitNameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tenantNameInput`<sup>Optional</sup> <a name="tenantNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tenantNameInput"></a>

```typescript
public readonly tenantNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limitName`<sup>Required</sup> <a name="limitName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.limitName"></a>

```typescript
public readonly limitName: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tenantName"></a>

```typescript
public readonly tenantName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedQueryLimitConfig <a name="DataMongodbatlasFederatedQueryLimitConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedQueryLimit } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedQueryLimitConfig: dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.limitName">limitName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#limit_name DataMongodbatlasFederatedQueryLimit#limit_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#project_id DataMongodbatlasFederatedQueryLimit#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.tenantName">tenantName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#tenant_name DataMongodbatlasFederatedQueryLimit#tenant_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#id DataMongodbatlasFederatedQueryLimit#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `limitName`<sup>Required</sup> <a name="limitName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.limitName"></a>

```typescript
public readonly limitName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#limit_name DataMongodbatlasFederatedQueryLimit#limit_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#project_id DataMongodbatlasFederatedQueryLimit#project_id}.

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.tenantName"></a>

```typescript
public readonly tenantName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#tenant_name DataMongodbatlasFederatedQueryLimit#tenant_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#id DataMongodbatlasFederatedQueryLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



