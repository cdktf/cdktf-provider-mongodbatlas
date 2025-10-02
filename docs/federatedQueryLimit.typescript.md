# `federatedQueryLimit` Submodule <a name="`federatedQueryLimit` Submodule" id="@cdktf/provider-mongodbatlas.federatedQueryLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedQueryLimit <a name="FederatedQueryLimit" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit mongodbatlas_federated_query_limit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.Initializer"></a>

```typescript
import { federatedQueryLimit } from '@cdktf/provider-mongodbatlas'

new federatedQueryLimit.FederatedQueryLimit(scope: Construct, id: string, config: FederatedQueryLimitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig">FederatedQueryLimitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig">FederatedQueryLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.resetDefaultLimit">resetDefaultLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.resetMaximumLimit">resetMaximumLimit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefaultLimit` <a name="resetDefaultLimit" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.resetDefaultLimit"></a>

```typescript
public resetDefaultLimit(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaximumLimit` <a name="resetMaximumLimit" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.resetMaximumLimit"></a>

```typescript
public resetMaximumLimit(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FederatedQueryLimit resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.isConstruct"></a>

```typescript
import { federatedQueryLimit } from '@cdktf/provider-mongodbatlas'

federatedQueryLimit.FederatedQueryLimit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.isTerraformElement"></a>

```typescript
import { federatedQueryLimit } from '@cdktf/provider-mongodbatlas'

federatedQueryLimit.FederatedQueryLimit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.isTerraformResource"></a>

```typescript
import { federatedQueryLimit } from '@cdktf/provider-mongodbatlas'

federatedQueryLimit.FederatedQueryLimit.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.generateConfigForImport"></a>

```typescript
import { federatedQueryLimit } from '@cdktf/provider-mongodbatlas'

federatedQueryLimit.FederatedQueryLimit.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FederatedQueryLimit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FederatedQueryLimit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FederatedQueryLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FederatedQueryLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.currentUsage">currentUsage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.defaultLimitInput">defaultLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.limitNameInput">limitNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.maximumLimitInput">maximumLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.overrunPolicyInput">overrunPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.tenantNameInput">tenantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.defaultLimit">defaultLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.limitName">limitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.maximumLimit">maximumLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.overrunPolicy">overrunPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.tenantName">tenantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.value">value</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `currentUsage`<sup>Required</sup> <a name="currentUsage" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.currentUsage"></a>

```typescript
public readonly currentUsage: number;
```

- *Type:* number

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `defaultLimitInput`<sup>Optional</sup> <a name="defaultLimitInput" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.defaultLimitInput"></a>

```typescript
public readonly defaultLimitInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitNameInput`<sup>Optional</sup> <a name="limitNameInput" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.limitNameInput"></a>

```typescript
public readonly limitNameInput: string;
```

- *Type:* string

---

##### `maximumLimitInput`<sup>Optional</sup> <a name="maximumLimitInput" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.maximumLimitInput"></a>

```typescript
public readonly maximumLimitInput: number;
```

- *Type:* number

---

##### `overrunPolicyInput`<sup>Optional</sup> <a name="overrunPolicyInput" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.overrunPolicyInput"></a>

```typescript
public readonly overrunPolicyInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tenantNameInput`<sup>Optional</sup> <a name="tenantNameInput" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.tenantNameInput"></a>

```typescript
public readonly tenantNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `defaultLimit`<sup>Required</sup> <a name="defaultLimit" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.defaultLimit"></a>

```typescript
public readonly defaultLimit: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limitName`<sup>Required</sup> <a name="limitName" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.limitName"></a>

```typescript
public readonly limitName: string;
```

- *Type:* string

---

##### `maximumLimit`<sup>Required</sup> <a name="maximumLimit" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.maximumLimit"></a>

```typescript
public readonly maximumLimit: number;
```

- *Type:* number

---

##### `overrunPolicy`<sup>Required</sup> <a name="overrunPolicy" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.overrunPolicy"></a>

```typescript
public readonly overrunPolicy: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.tenantName"></a>

```typescript
public readonly tenantName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedQueryLimitConfig <a name="FederatedQueryLimitConfig" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.Initializer"></a>

```typescript
import { federatedQueryLimit } from '@cdktf/provider-mongodbatlas'

const federatedQueryLimitConfig: federatedQueryLimit.FederatedQueryLimitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.limitName">limitName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#limit_name FederatedQueryLimit#limit_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.overrunPolicy">overrunPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#overrun_policy FederatedQueryLimit#overrun_policy}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#project_id FederatedQueryLimit#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.tenantName">tenantName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#tenant_name FederatedQueryLimit#tenant_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#value FederatedQueryLimit#value}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.defaultLimit">defaultLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#default_limit FederatedQueryLimit#default_limit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#id FederatedQueryLimit#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.maximumLimit">maximumLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#maximum_limit FederatedQueryLimit#maximum_limit}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `limitName`<sup>Required</sup> <a name="limitName" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.limitName"></a>

```typescript
public readonly limitName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#limit_name FederatedQueryLimit#limit_name}.

---

##### `overrunPolicy`<sup>Required</sup> <a name="overrunPolicy" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.overrunPolicy"></a>

```typescript
public readonly overrunPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#overrun_policy FederatedQueryLimit#overrun_policy}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#project_id FederatedQueryLimit#project_id}.

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.tenantName"></a>

```typescript
public readonly tenantName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#tenant_name FederatedQueryLimit#tenant_name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#value FederatedQueryLimit#value}.

---

##### `defaultLimit`<sup>Optional</sup> <a name="defaultLimit" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.defaultLimit"></a>

```typescript
public readonly defaultLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#default_limit FederatedQueryLimit#default_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#id FederatedQueryLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumLimit`<sup>Optional</sup> <a name="maximumLimit" id="@cdktf/provider-mongodbatlas.federatedQueryLimit.FederatedQueryLimitConfig.property.maximumLimit"></a>

```typescript
public readonly maximumLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_query_limit#maximum_limit FederatedQueryLimit#maximum_limit}.

---



