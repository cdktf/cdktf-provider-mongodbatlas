# `privatelinkEndpointServiceServerless` Submodule <a name="`privatelinkEndpointServiceServerless` Submodule" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatelinkEndpointServiceServerless <a name="PrivatelinkEndpointServiceServerless" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless mongodbatlas_privatelink_endpoint_service_serverless}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer"></a>

```typescript
import { privatelinkEndpointServiceServerless } from '@cdktf/provider-mongodbatlas'

new privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless(scope: Construct, id: string, config: PrivatelinkEndpointServiceServerlessConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig">PrivatelinkEndpointServiceServerlessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig">PrivatelinkEndpointServiceServerlessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetCloudProviderEndpointId">resetCloudProviderEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetPrivateEndpointIpAddress">resetPrivateEndpointIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivatelinkEndpointServiceServerlessTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>

---

##### `resetCloudProviderEndpointId` <a name="resetCloudProviderEndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetCloudProviderEndpointId"></a>

```typescript
public resetCloudProviderEndpointId(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivateEndpointIpAddress` <a name="resetPrivateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetPrivateEndpointIpAddress"></a>

```typescript
public resetPrivateEndpointIpAddress(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatelinkEndpointServiceServerless resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isConstruct"></a>

```typescript
import { privatelinkEndpointServiceServerless } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformElement"></a>

```typescript
import { privatelinkEndpointServiceServerless } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformResource"></a>

```typescript
import { privatelinkEndpointServiceServerless } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport"></a>

```typescript
import { privatelinkEndpointServiceServerless } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivatelinkEndpointServiceServerless resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivatelinkEndpointServiceServerless to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivatelinkEndpointServiceServerless that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivatelinkEndpointServiceServerless to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateLinkServiceResourceId">privateLinkServiceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference">PrivatelinkEndpointServiceServerlessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointIdInput">cloudProviderEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointIdInput">endpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceNameInput">instanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddressInput">privateEndpointIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointId">cloudProviderEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddress">privateEndpointIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `privateLinkServiceResourceId`<sup>Required</sup> <a name="privateLinkServiceResourceId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateLinkServiceResourceId"></a>

```typescript
public readonly privateLinkServiceResourceId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeouts"></a>

```typescript
public readonly timeouts: PrivatelinkEndpointServiceServerlessTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference">PrivatelinkEndpointServiceServerlessTimeoutsOutputReference</a>

---

##### `cloudProviderEndpointIdInput`<sup>Optional</sup> <a name="cloudProviderEndpointIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointIdInput"></a>

```typescript
public readonly cloudProviderEndpointIdInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointIdInput"></a>

```typescript
public readonly endpointIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceNameInput"></a>

```typescript
public readonly instanceNameInput: string;
```

- *Type:* string

---

##### `privateEndpointIpAddressInput`<sup>Optional</sup> <a name="privateEndpointIpAddressInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddressInput"></a>

```typescript
public readonly privateEndpointIpAddressInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivatelinkEndpointServiceServerlessTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>

---

##### `cloudProviderEndpointId`<sup>Required</sup> <a name="cloudProviderEndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointId"></a>

```typescript
public readonly cloudProviderEndpointId: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

##### `privateEndpointIpAddress`<sup>Required</sup> <a name="privateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddress"></a>

```typescript
public readonly privateEndpointIpAddress: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatelinkEndpointServiceServerlessConfig <a name="PrivatelinkEndpointServiceServerlessConfig" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.Initializer"></a>

```typescript
import { privatelinkEndpointServiceServerless } from '@cdktf/provider-mongodbatlas'

const privatelinkEndpointServiceServerlessConfig: privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.endpointId">endpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#endpoint_id PrivatelinkEndpointServiceServerless#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.instanceName">instanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#instance_name PrivatelinkEndpointServiceServerless#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#project_id PrivatelinkEndpointServiceServerless#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#provider_name PrivatelinkEndpointServiceServerless#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.cloudProviderEndpointId">cloudProviderEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#cloud_provider_endpoint_id PrivatelinkEndpointServiceServerless#cloud_provider_endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#comment PrivatelinkEndpointServiceServerless#comment}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#id PrivatelinkEndpointServiceServerless#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.privateEndpointIpAddress">privateEndpointIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#private_endpoint_ip_address PrivatelinkEndpointServiceServerless#private_endpoint_ip_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#endpoint_id PrivatelinkEndpointServiceServerless#endpoint_id}.

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#instance_name PrivatelinkEndpointServiceServerless#instance_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#project_id PrivatelinkEndpointServiceServerless#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#provider_name PrivatelinkEndpointServiceServerless#provider_name}.

---

##### `cloudProviderEndpointId`<sup>Optional</sup> <a name="cloudProviderEndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.cloudProviderEndpointId"></a>

```typescript
public readonly cloudProviderEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#cloud_provider_endpoint_id PrivatelinkEndpointServiceServerless#cloud_provider_endpoint_id}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#comment PrivatelinkEndpointServiceServerless#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#id PrivatelinkEndpointServiceServerless#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateEndpointIpAddress`<sup>Optional</sup> <a name="privateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.privateEndpointIpAddress"></a>

```typescript
public readonly privateEndpointIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#private_endpoint_ip_address PrivatelinkEndpointServiceServerless#private_endpoint_ip_address}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivatelinkEndpointServiceServerlessTimeouts;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#timeouts PrivatelinkEndpointServiceServerless#timeouts}

---

### PrivatelinkEndpointServiceServerlessTimeouts <a name="PrivatelinkEndpointServiceServerlessTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.Initializer"></a>

```typescript
import { privatelinkEndpointServiceServerless } from '@cdktf/provider-mongodbatlas'

const privatelinkEndpointServiceServerlessTimeouts: privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#create PrivatelinkEndpointServiceServerless#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#delete PrivatelinkEndpointServiceServerless#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#create PrivatelinkEndpointServiceServerless#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/resources/privatelink_endpoint_service_serverless#delete PrivatelinkEndpointServiceServerless#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatelinkEndpointServiceServerlessTimeoutsOutputReference <a name="PrivatelinkEndpointServiceServerlessTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer"></a>

```typescript
import { privatelinkEndpointServiceServerless } from '@cdktf/provider-mongodbatlas'

new privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatelinkEndpointServiceServerlessTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>

---



