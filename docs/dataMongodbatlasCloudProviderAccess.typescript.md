# `data_mongodbatlas_cloud_provider_access`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_cloud_provider_access`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_access).

# `dataMongodbatlasCloudProviderAccess` Submodule <a name="`dataMongodbatlasCloudProviderAccess` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudProviderAccess <a name="DataMongodbatlasCloudProviderAccess" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_access mongodbatlas_cloud_provider_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccess } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess(scope: Construct, id: string, config: DataMongodbatlasCloudProviderAccessConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig">DataMongodbatlasCloudProviderAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig">DataMongodbatlasCloudProviderAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.isConstruct"></a>

```typescript
import { dataMongodbatlasCloudProviderAccess } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.isTerraformElement"></a>

```typescript
import { dataMongodbatlasCloudProviderAccess } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasCloudProviderAccess } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.awsIamRoles">awsIamRoles</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList">DataMongodbatlasCloudProviderAccessAwsIamRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `awsIamRoles`<sup>Required</sup> <a name="awsIamRoles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.awsIamRoles"></a>

```typescript
public readonly awsIamRoles: DataMongodbatlasCloudProviderAccessAwsIamRolesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList">DataMongodbatlasCloudProviderAccessAwsIamRolesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccess.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudProviderAccessAwsIamRoles <a name="DataMongodbatlasCloudProviderAccessAwsIamRoles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRoles.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccess } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasCloudProviderAccessAwsIamRoles: dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRoles = { ... }
```


### DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages <a name="DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccess } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages: dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages = { ... }
```


### DataMongodbatlasCloudProviderAccessConfig <a name="DataMongodbatlasCloudProviderAccessConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccess } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasCloudProviderAccessConfig: dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_access#project_id DataMongodbatlasCloudProviderAccess#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_access#id DataMongodbatlasCloudProviderAccess#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_access#project_id DataMongodbatlasCloudProviderAccess#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_access#id DataMongodbatlasCloudProviderAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList <a name="DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccess } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.get"></a>

```typescript
public get(index: number): DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference <a name="DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccess } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.property.featureId">featureId</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.property.featureType">featureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages">DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureId`<sup>Required</sup> <a name="featureId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.property.featureId"></a>

```typescript
public readonly featureId: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.property.featureType"></a>

```typescript
public readonly featureType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages">DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages</a>

---


### DataMongodbatlasCloudProviderAccessAwsIamRolesList <a name="DataMongodbatlasCloudProviderAccessAwsIamRolesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccess } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.get"></a>

```typescript
public get(index: number): DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference <a name="DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccess } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.atlasAssumedRoleExternalId">atlasAssumedRoleExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.atlasAwsAccountArn">atlasAwsAccountArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.authorizedDate">authorizedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.featureUsages">featureUsages</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList">DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.iamAssumedRoleArn">iamAssumedRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRoles">DataMongodbatlasCloudProviderAccessAwsIamRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `atlasAssumedRoleExternalId`<sup>Required</sup> <a name="atlasAssumedRoleExternalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.atlasAssumedRoleExternalId"></a>

```typescript
public readonly atlasAssumedRoleExternalId: string;
```

- *Type:* string

---

##### `atlasAwsAccountArn`<sup>Required</sup> <a name="atlasAwsAccountArn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.atlasAwsAccountArn"></a>

```typescript
public readonly atlasAwsAccountArn: string;
```

- *Type:* string

---

##### `authorizedDate`<sup>Required</sup> <a name="authorizedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.authorizedDate"></a>

```typescript
public readonly authorizedDate: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `featureUsages`<sup>Required</sup> <a name="featureUsages" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.featureUsages"></a>

```typescript
public readonly featureUsages: DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList">DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList</a>

---

##### `iamAssumedRoleArn`<sup>Required</sup> <a name="iamAssumedRoleArn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.iamAssumedRoleArn"></a>

```typescript
public readonly iamAssumedRoleArn: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasCloudProviderAccessAwsIamRoles;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccess.DataMongodbatlasCloudProviderAccessAwsIamRoles">DataMongodbatlasCloudProviderAccessAwsIamRoles</a>

---



