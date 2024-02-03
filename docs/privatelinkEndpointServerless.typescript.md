# `privatelinkEndpointServerless` Submodule <a name="`privatelinkEndpointServerless` Submodule" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatelinkEndpointServerless <a name="PrivatelinkEndpointServerless" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless mongodbatlas_privatelink_endpoint_serverless}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.Initializer"></a>

```typescript
import { privatelinkEndpointServerless } from '@cdktf/provider-mongodbatlas'

new privatelinkEndpointServerless.PrivatelinkEndpointServerless(scope: Construct, id: string, config: PrivatelinkEndpointServerlessConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig">PrivatelinkEndpointServerlessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig">PrivatelinkEndpointServerlessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivatelinkEndpointServerlessTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts">PrivatelinkEndpointServerlessTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatelinkEndpointServerless resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.isConstruct"></a>

```typescript
import { privatelinkEndpointServerless } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServerless.PrivatelinkEndpointServerless.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.isTerraformElement"></a>

```typescript
import { privatelinkEndpointServerless } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServerless.PrivatelinkEndpointServerless.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.isTerraformResource"></a>

```typescript
import { privatelinkEndpointServerless } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServerless.PrivatelinkEndpointServerless.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.generateConfigForImport"></a>

```typescript
import { privatelinkEndpointServerless } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServerless.PrivatelinkEndpointServerless.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivatelinkEndpointServerless resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivatelinkEndpointServerless to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivatelinkEndpointServerless that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivatelinkEndpointServerless to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.endpointServiceName">endpointServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.privateLinkServiceResourceId">privateLinkServiceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference">PrivatelinkEndpointServerlessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.instanceNameInput">instanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts">PrivatelinkEndpointServerlessTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `endpointServiceName`<sup>Required</sup> <a name="endpointServiceName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.endpointServiceName"></a>

```typescript
public readonly endpointServiceName: string;
```

- *Type:* string

---

##### `privateLinkServiceResourceId`<sup>Required</sup> <a name="privateLinkServiceResourceId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.privateLinkServiceResourceId"></a>

```typescript
public readonly privateLinkServiceResourceId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.timeouts"></a>

```typescript
public readonly timeouts: PrivatelinkEndpointServerlessTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference">PrivatelinkEndpointServerlessTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.instanceNameInput"></a>

```typescript
public readonly instanceNameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivatelinkEndpointServerlessTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts">PrivatelinkEndpointServerlessTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerless.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatelinkEndpointServerlessConfig <a name="PrivatelinkEndpointServerlessConfig" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.Initializer"></a>

```typescript
import { privatelinkEndpointServerless } from '@cdktf/provider-mongodbatlas'

const privatelinkEndpointServerlessConfig: privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.instanceName">instanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#instance_name PrivatelinkEndpointServerless#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#project_id PrivatelinkEndpointServerless#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#provider_name PrivatelinkEndpointServerless#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#id PrivatelinkEndpointServerless#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts">PrivatelinkEndpointServerlessTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#instance_name PrivatelinkEndpointServerless#instance_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#project_id PrivatelinkEndpointServerless#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#provider_name PrivatelinkEndpointServerless#provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#id PrivatelinkEndpointServerless#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivatelinkEndpointServerlessTimeouts;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts">PrivatelinkEndpointServerlessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#timeouts PrivatelinkEndpointServerless#timeouts}

---

### PrivatelinkEndpointServerlessTimeouts <a name="PrivatelinkEndpointServerlessTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts.Initializer"></a>

```typescript
import { privatelinkEndpointServerless } from '@cdktf/provider-mongodbatlas'

const privatelinkEndpointServerlessTimeouts: privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#create PrivatelinkEndpointServerless#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#delete PrivatelinkEndpointServerless#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#create PrivatelinkEndpointServerless#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_serverless#delete PrivatelinkEndpointServerless#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatelinkEndpointServerlessTimeoutsOutputReference <a name="PrivatelinkEndpointServerlessTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.Initializer"></a>

```typescript
import { privatelinkEndpointServerless } from '@cdktf/provider-mongodbatlas'

new privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts">PrivatelinkEndpointServerlessTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatelinkEndpointServerlessTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServerless.PrivatelinkEndpointServerlessTimeouts">PrivatelinkEndpointServerlessTimeouts</a>

---



