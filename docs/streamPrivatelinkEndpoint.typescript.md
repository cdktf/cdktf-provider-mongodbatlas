# `streamPrivatelinkEndpoint` Submodule <a name="`streamPrivatelinkEndpoint` Submodule" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamPrivatelinkEndpoint <a name="StreamPrivatelinkEndpoint" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/resources/stream_privatelink_endpoint mongodbatlas_stream_privatelink_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer"></a>

```typescript
import { streamPrivatelinkEndpoint } from '@cdktf/provider-mongodbatlas'

new streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint(scope: Construct, id: string, config: StreamPrivatelinkEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig">StreamPrivatelinkEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig">StreamPrivatelinkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsDomain">resetDnsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsSubDomain">resetDnsSubDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetServiceEndpointId">resetServiceEndpointId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetArn` <a name="resetArn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetDnsDomain` <a name="resetDnsDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsDomain"></a>

```typescript
public resetDnsDomain(): void
```

##### `resetDnsSubDomain` <a name="resetDnsSubDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsSubDomain"></a>

```typescript
public resetDnsSubDomain(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetServiceEndpointId` <a name="resetServiceEndpointId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetServiceEndpointId"></a>

```typescript
public resetServiceEndpointId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isConstruct"></a>

```typescript
import { streamPrivatelinkEndpoint } from '@cdktf/provider-mongodbatlas'

streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformElement"></a>

```typescript
import { streamPrivatelinkEndpoint } from '@cdktf/provider-mongodbatlas'

streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformResource"></a>

```typescript
import { streamPrivatelinkEndpoint } from '@cdktf/provider-mongodbatlas'

streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport"></a>

```typescript
import { streamPrivatelinkEndpoint } from '@cdktf/provider-mongodbatlas'

streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StreamPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamPrivatelinkEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamPrivatelinkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/resources/stream_privatelink_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamPrivatelinkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointId">interfaceEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointName">interfaceEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerAccountId">providerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomainInput">dnsDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomainInput">dnsSubDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointIdInput">serviceEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendorInput">vendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomain">dnsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomain">dnsSubDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointId">serviceEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interfaceEndpointId`<sup>Required</sup> <a name="interfaceEndpointId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointId"></a>

```typescript
public readonly interfaceEndpointId: string;
```

- *Type:* string

---

##### `interfaceEndpointName`<sup>Required</sup> <a name="interfaceEndpointName" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointName"></a>

```typescript
public readonly interfaceEndpointName: string;
```

- *Type:* string

---

##### `providerAccountId`<sup>Required</sup> <a name="providerAccountId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerAccountId"></a>

```typescript
public readonly providerAccountId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `dnsDomainInput`<sup>Optional</sup> <a name="dnsDomainInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomainInput"></a>

```typescript
public readonly dnsDomainInput: string;
```

- *Type:* string

---

##### `dnsSubDomainInput`<sup>Optional</sup> <a name="dnsSubDomainInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomainInput"></a>

```typescript
public readonly dnsSubDomainInput: string[];
```

- *Type:* string[]

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceEndpointIdInput`<sup>Optional</sup> <a name="serviceEndpointIdInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointIdInput"></a>

```typescript
public readonly serviceEndpointIdInput: string;
```

- *Type:* string

---

##### `vendorInput`<sup>Optional</sup> <a name="vendorInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendorInput"></a>

```typescript
public readonly vendorInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dnsDomain`<sup>Required</sup> <a name="dnsDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomain"></a>

```typescript
public readonly dnsDomain: string;
```

- *Type:* string

---

##### `dnsSubDomain`<sup>Required</sup> <a name="dnsSubDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomain"></a>

```typescript
public readonly dnsSubDomain: string[];
```

- *Type:* string[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceEndpointId`<sup>Required</sup> <a name="serviceEndpointId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointId"></a>

```typescript
public readonly serviceEndpointId: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamPrivatelinkEndpointConfig <a name="StreamPrivatelinkEndpointConfig" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.Initializer"></a>

```typescript
import { streamPrivatelinkEndpoint } from '@cdktf/provider-mongodbatlas'

const streamPrivatelinkEndpointConfig: streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.providerName">providerName</a></code> | <code>string</code> | Provider where the Kafka cluster is deployed. Valid values are AWS and AZURE. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.vendor">vendor</a></code> | <code>string</code> | Vendor that manages the Kafka cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.arn">arn</a></code> | <code>string</code> | Amazon Resource Name (ARN). Required for AWS Provider and MSK vendor. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsDomain">dnsDomain</a></code> | <code>string</code> | The domain hostname. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsSubDomain">dnsSubDomain</a></code> | <code>string[]</code> | Sub-Domain name of Confluent cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.region">region</a></code> | <code>string</code> | The region of the Provider’s cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.serviceEndpointId">serviceEndpointId</a></code> | <code>string</code> | For AZURE EVENTHUB, this is the [namespace endpoint ID](https://learn.microsoft.com/en-us/rest/api/eventhub/namespaces/get). For AWS CONFLUENT cluster, this is the [VPC Endpoint service name](https://docs.confluent.io/cloud/current/networking/private-links/aws-privatelink.html). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.<br>**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/resources/stream_privatelink_endpoint#project_id StreamPrivatelinkEndpoint#project_id}

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Provider where the Kafka cluster is deployed. Valid values are AWS and AZURE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/resources/stream_privatelink_endpoint#provider_name StreamPrivatelinkEndpoint#provider_name}

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

Vendor that manages the Kafka cluster.

The following are the vendor values per provider:<br>- MSK and CONFLUENT for the AWS provider.<br>- EVENTHUB and CONFLUENT for the AZURE provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/resources/stream_privatelink_endpoint#vendor StreamPrivatelinkEndpoint#vendor}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Amazon Resource Name (ARN). Required for AWS Provider and MSK vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/resources/stream_privatelink_endpoint#arn StreamPrivatelinkEndpoint#arn}

---

##### `dnsDomain`<sup>Optional</sup> <a name="dnsDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsDomain"></a>

```typescript
public readonly dnsDomain: string;
```

- *Type:* string

The domain hostname.

Required for the following provider and vendor combinations:<br>- AWS provider with CONFLUENT vendor.<br>- AZURE provider with EVENTHUB or CONFLUENT vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/resources/stream_privatelink_endpoint#dns_domain StreamPrivatelinkEndpoint#dns_domain}

---

##### `dnsSubDomain`<sup>Optional</sup> <a name="dnsSubDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsSubDomain"></a>

```typescript
public readonly dnsSubDomain: string[];
```

- *Type:* string[]

Sub-Domain name of Confluent cluster.

These are typically your availability zones. Required for AWS Provider and CONFLUENT vendor. If your AWS CONFLUENT cluster doesn't use subdomains, you must set this to the empty array [].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/resources/stream_privatelink_endpoint#dns_sub_domain StreamPrivatelinkEndpoint#dns_sub_domain}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the Provider’s cluster.

See [AZURE](https://www.mongodb.com/docs/atlas/reference/microsoft-azure/#stream-processing-instances) and [AWS](https://www.mongodb.com/docs/atlas/reference/amazon-aws/#stream-processing-instances) supported regions. When the vendor is `CONFLUENT`, this is the domain name of Confluent cluster. When the vendor is `MSK`, this is computed by the API from the provided `arn`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/resources/stream_privatelink_endpoint#region StreamPrivatelinkEndpoint#region}

---

##### `serviceEndpointId`<sup>Optional</sup> <a name="serviceEndpointId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.serviceEndpointId"></a>

```typescript
public readonly serviceEndpointId: string;
```

- *Type:* string

For AZURE EVENTHUB, this is the [namespace endpoint ID](https://learn.microsoft.com/en-us/rest/api/eventhub/namespaces/get). For AWS CONFLUENT cluster, this is the [VPC Endpoint service name](https://docs.confluent.io/cloud/current/networking/private-links/aws-privatelink.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/resources/stream_privatelink_endpoint#service_endpoint_id StreamPrivatelinkEndpoint#service_endpoint_id}

---



