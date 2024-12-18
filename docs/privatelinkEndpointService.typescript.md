# `privatelinkEndpointService` Submodule <a name="`privatelinkEndpointService` Submodule" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatelinkEndpointService <a name="PrivatelinkEndpointService" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service mongodbatlas_privatelink_endpoint_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer"></a>

```typescript
import { privatelinkEndpointService } from '@cdktf/provider-mongodbatlas'

new privatelinkEndpointService.PrivatelinkEndpointService(scope: Construct, id: string, config: PrivatelinkEndpointServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig">PrivatelinkEndpointServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig">PrivatelinkEndpointServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.putEndpoints">putEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetGcpProjectId">resetGcpProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetPrivateEndpointIpAddress">resetPrivateEndpointIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoints` <a name="putEndpoints" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.putEndpoints"></a>

```typescript
public putEndpoints(value: IResolvable | PrivatelinkEndpointServiceEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.putEndpoints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivatelinkEndpointServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a>

---

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetEndpoints"></a>

```typescript
public resetEndpoints(): void
```

##### `resetGcpProjectId` <a name="resetGcpProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetGcpProjectId"></a>

```typescript
public resetGcpProjectId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivateEndpointIpAddress` <a name="resetPrivateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetPrivateEndpointIpAddress"></a>

```typescript
public resetPrivateEndpointIpAddress(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatelinkEndpointService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isConstruct"></a>

```typescript
import { privatelinkEndpointService } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointService.PrivatelinkEndpointService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isTerraformElement"></a>

```typescript
import { privatelinkEndpointService } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointService.PrivatelinkEndpointService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isTerraformResource"></a>

```typescript
import { privatelinkEndpointService } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointService.PrivatelinkEndpointService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.generateConfigForImport"></a>

```typescript
import { privatelinkEndpointService } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointService.PrivatelinkEndpointService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivatelinkEndpointService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivatelinkEndpointService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivatelinkEndpointService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivatelinkEndpointService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.awsConnectionStatus">awsConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.azureStatus">azureStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.deleteRequested">deleteRequested</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointGroupName">endpointGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList">PrivatelinkEndpointServiceEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.gcpStatus">gcpStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.interfaceEndpointId">interfaceEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointConnectionName">privateEndpointConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointResourceId">privateEndpointResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference">PrivatelinkEndpointServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointServiceIdInput">endpointServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointsInput">endpointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.gcpProjectIdInput">gcpProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointIpAddressInput">privateEndpointIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateLinkIdInput">privateLinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointServiceId">endpointServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.gcpProjectId">gcpProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointIpAddress">privateEndpointIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateLinkId">privateLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsConnectionStatus`<sup>Required</sup> <a name="awsConnectionStatus" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.awsConnectionStatus"></a>

```typescript
public readonly awsConnectionStatus: string;
```

- *Type:* string

---

##### `azureStatus`<sup>Required</sup> <a name="azureStatus" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.azureStatus"></a>

```typescript
public readonly azureStatus: string;
```

- *Type:* string

---

##### `deleteRequested`<sup>Required</sup> <a name="deleteRequested" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.deleteRequested"></a>

```typescript
public readonly deleteRequested: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `endpointGroupName`<sup>Required</sup> <a name="endpointGroupName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointGroupName"></a>

```typescript
public readonly endpointGroupName: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpoints"></a>

```typescript
public readonly endpoints: PrivatelinkEndpointServiceEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList">PrivatelinkEndpointServiceEndpointsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `gcpStatus`<sup>Required</sup> <a name="gcpStatus" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.gcpStatus"></a>

```typescript
public readonly gcpStatus: string;
```

- *Type:* string

---

##### `interfaceEndpointId`<sup>Required</sup> <a name="interfaceEndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.interfaceEndpointId"></a>

```typescript
public readonly interfaceEndpointId: string;
```

- *Type:* string

---

##### `privateEndpointConnectionName`<sup>Required</sup> <a name="privateEndpointConnectionName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointConnectionName"></a>

```typescript
public readonly privateEndpointConnectionName: string;
```

- *Type:* string

---

##### `privateEndpointResourceId`<sup>Required</sup> <a name="privateEndpointResourceId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointResourceId"></a>

```typescript
public readonly privateEndpointResourceId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.timeouts"></a>

```typescript
public readonly timeouts: PrivatelinkEndpointServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference">PrivatelinkEndpointServiceTimeoutsOutputReference</a>

---

##### `endpointServiceIdInput`<sup>Optional</sup> <a name="endpointServiceIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointServiceIdInput"></a>

```typescript
public readonly endpointServiceIdInput: string;
```

- *Type:* string

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: IResolvable | PrivatelinkEndpointServiceEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>[]

---

##### `gcpProjectIdInput`<sup>Optional</sup> <a name="gcpProjectIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.gcpProjectIdInput"></a>

```typescript
public readonly gcpProjectIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privateEndpointIpAddressInput`<sup>Optional</sup> <a name="privateEndpointIpAddressInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointIpAddressInput"></a>

```typescript
public readonly privateEndpointIpAddressInput: string;
```

- *Type:* string

---

##### `privateLinkIdInput`<sup>Optional</sup> <a name="privateLinkIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateLinkIdInput"></a>

```typescript
public readonly privateLinkIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivatelinkEndpointServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a>

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointServiceId"></a>

```typescript
public readonly endpointServiceId: string;
```

- *Type:* string

---

##### `gcpProjectId`<sup>Required</sup> <a name="gcpProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.gcpProjectId"></a>

```typescript
public readonly gcpProjectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateEndpointIpAddress`<sup>Required</sup> <a name="privateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointIpAddress"></a>

```typescript
public readonly privateEndpointIpAddress: string;
```

- *Type:* string

---

##### `privateLinkId`<sup>Required</sup> <a name="privateLinkId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateLinkId"></a>

```typescript
public readonly privateLinkId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatelinkEndpointServiceConfig <a name="PrivatelinkEndpointServiceConfig" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.Initializer"></a>

```typescript
import { privatelinkEndpointService } from '@cdktf/provider-mongodbatlas'

const privatelinkEndpointServiceConfig: privatelinkEndpointService.PrivatelinkEndpointServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.endpointServiceId">endpointServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#endpoint_service_id PrivatelinkEndpointService#endpoint_service_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.privateLinkId">privateLinkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#private_link_id PrivatelinkEndpointService#private_link_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#project_id PrivatelinkEndpointService#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#provider_name PrivatelinkEndpointService#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.endpoints">endpoints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>[]</code> | endpoints block. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.gcpProjectId">gcpProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#gcp_project_id PrivatelinkEndpointService#gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#id PrivatelinkEndpointService#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.privateEndpointIpAddress">privateEndpointIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#private_endpoint_ip_address PrivatelinkEndpointService#private_endpoint_ip_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.endpointServiceId"></a>

```typescript
public readonly endpointServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#endpoint_service_id PrivatelinkEndpointService#endpoint_service_id}.

---

##### `privateLinkId`<sup>Required</sup> <a name="privateLinkId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.privateLinkId"></a>

```typescript
public readonly privateLinkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#private_link_id PrivatelinkEndpointService#private_link_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#project_id PrivatelinkEndpointService#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#provider_name PrivatelinkEndpointService#provider_name}.

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | PrivatelinkEndpointServiceEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>[]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#endpoints PrivatelinkEndpointService#endpoints}

---

##### `gcpProjectId`<sup>Optional</sup> <a name="gcpProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.gcpProjectId"></a>

```typescript
public readonly gcpProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#gcp_project_id PrivatelinkEndpointService#gcp_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#id PrivatelinkEndpointService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateEndpointIpAddress`<sup>Optional</sup> <a name="privateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.privateEndpointIpAddress"></a>

```typescript
public readonly privateEndpointIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#private_endpoint_ip_address PrivatelinkEndpointService#private_endpoint_ip_address}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivatelinkEndpointServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#timeouts PrivatelinkEndpointService#timeouts}

---

### PrivatelinkEndpointServiceEndpoints <a name="PrivatelinkEndpointServiceEndpoints" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints.Initializer"></a>

```typescript
import { privatelinkEndpointService } from '@cdktf/provider-mongodbatlas'

const privatelinkEndpointServiceEndpoints: privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints.property.endpointName">endpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#endpoint_name PrivatelinkEndpointService#endpoint_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#ip_address PrivatelinkEndpointService#ip_address}. |

---

##### `endpointName`<sup>Optional</sup> <a name="endpointName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#endpoint_name PrivatelinkEndpointService#endpoint_name}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#ip_address PrivatelinkEndpointService#ip_address}.

---

### PrivatelinkEndpointServiceTimeouts <a name="PrivatelinkEndpointServiceTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts.Initializer"></a>

```typescript
import { privatelinkEndpointService } from '@cdktf/provider-mongodbatlas'

const privatelinkEndpointServiceTimeouts: privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#create PrivatelinkEndpointService#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#delete PrivatelinkEndpointService#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#create PrivatelinkEndpointService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/resources/privatelink_endpoint_service#delete PrivatelinkEndpointService#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatelinkEndpointServiceEndpointsList <a name="PrivatelinkEndpointServiceEndpointsList" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer"></a>

```typescript
import { privatelinkEndpointService } from '@cdktf/provider-mongodbatlas'

new privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.get"></a>

```typescript
public get(index: number): PrivatelinkEndpointServiceEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatelinkEndpointServiceEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>[]

---


### PrivatelinkEndpointServiceEndpointsOutputReference <a name="PrivatelinkEndpointServiceEndpointsOutputReference" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer"></a>

```typescript
import { privatelinkEndpointService } from '@cdktf/provider-mongodbatlas'

new privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resetEndpointName">resetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointName` <a name="resetEndpointName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resetEndpointName"></a>

```typescript
public resetEndpointName(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatelinkEndpointServiceEndpoints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>

---


### PrivatelinkEndpointServiceTimeoutsOutputReference <a name="PrivatelinkEndpointServiceTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { privatelinkEndpointService } from '@cdktf/provider-mongodbatlas'

new privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatelinkEndpointServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a>

---



