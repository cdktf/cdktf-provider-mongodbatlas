# `mongodbEmployeeAccessGrant` Submodule <a name="`mongodbEmployeeAccessGrant` Submodule" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongodbEmployeeAccessGrant <a name="MongodbEmployeeAccessGrant" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant mongodbatlas_mongodb_employee_access_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer"></a>

```typescript
import { mongodbEmployeeAccessGrant } from '@cdktf/provider-mongodbatlas'

new mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant(scope: Construct, id: string, config: MongodbEmployeeAccessGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig">MongodbEmployeeAccessGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig">MongodbEmployeeAccessGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MongodbEmployeeAccessGrant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isConstruct"></a>

```typescript
import { mongodbEmployeeAccessGrant } from '@cdktf/provider-mongodbatlas'

mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformElement"></a>

```typescript
import { mongodbEmployeeAccessGrant } from '@cdktf/provider-mongodbatlas'

mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformResource"></a>

```typescript
import { mongodbEmployeeAccessGrant } from '@cdktf/provider-mongodbatlas'

mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.generateConfigForImport"></a>

```typescript
import { mongodbEmployeeAccessGrant } from '@cdktf/provider-mongodbatlas'

mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MongodbEmployeeAccessGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MongodbEmployeeAccessGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MongodbEmployeeAccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MongodbEmployeeAccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.expirationTimeInput">expirationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.grantTypeInput">grantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.grantType">grantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `expirationTimeInput`<sup>Optional</sup> <a name="expirationTimeInput" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.expirationTimeInput"></a>

```typescript
public readonly expirationTimeInput: string;
```

- *Type:* string

---

##### `grantTypeInput`<sup>Optional</sup> <a name="grantTypeInput" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.grantTypeInput"></a>

```typescript
public readonly grantTypeInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `grantType`<sup>Required</sup> <a name="grantType" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.grantType"></a>

```typescript
public readonly grantType: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MongodbEmployeeAccessGrantConfig <a name="MongodbEmployeeAccessGrantConfig" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.Initializer"></a>

```typescript
import { mongodbEmployeeAccessGrant } from '@cdktf/provider-mongodbatlas'

const mongodbEmployeeAccessGrantConfig: mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Human-readable label that identifies this cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.expirationTime">expirationTime</a></code> | <code>string</code> | Expiration date for the employee access grant. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.grantType">grantType</a></code> | <code>string</code> | Level of access to grant to MongoDB Employees. Possible values are CLUSTER_DATABASE_LOGS, CLUSTER_INFRASTRUCTURE or CLUSTER_INFRASTRUCTURE_AND_APP_SERVICES_SYNC_DATA. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Human-readable label that identifies this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant#cluster_name MongodbEmployeeAccessGrant#cluster_name}

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

Expiration date for the employee access grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant#expiration_time MongodbEmployeeAccessGrant#expiration_time}

---

##### `grantType`<sup>Required</sup> <a name="grantType" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.grantType"></a>

```typescript
public readonly grantType: string;
```

- *Type:* string

Level of access to grant to MongoDB Employees. Possible values are CLUSTER_DATABASE_LOGS, CLUSTER_INFRASTRUCTURE or CLUSTER_INFRASTRUCTURE_AND_APP_SERVICES_SYNC_DATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant#grant_type MongodbEmployeeAccessGrant#grant_type}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant#project_id MongodbEmployeeAccessGrant#project_id}

---



