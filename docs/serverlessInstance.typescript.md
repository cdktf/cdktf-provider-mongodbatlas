# `serverlessInstance` Submodule <a name="`serverlessInstance` Submodule" id="@cdktf/provider-mongodbatlas.serverlessInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessInstance <a name="ServerlessInstance" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance mongodbatlas_serverless_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer"></a>

```typescript
import { serverlessInstance } from '@cdktf/provider-mongodbatlas'

new serverlessInstance.ServerlessInstance(scope: Construct, id: string, config: ServerlessInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig">ServerlessInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig">ServerlessInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putLinks">putLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetAutoIndexing">resetAutoIndexing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetContinuousBackupEnabled">resetContinuousBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetLinks">resetLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetStateName">resetStateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetTerminationProtectionEnabled">resetTerminationProtectionEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLinks` <a name="putLinks" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putLinks"></a>

```typescript
public putLinks(value: IResolvable | ServerlessInstanceLinks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putLinks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks">ServerlessInstanceLinks</a>[]

---

##### `putTags` <a name="putTags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putTags"></a>

```typescript
public putTags(value: IResolvable | ServerlessInstanceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags">ServerlessInstanceTags</a>[]

---

##### `resetAutoIndexing` <a name="resetAutoIndexing" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetAutoIndexing"></a>

```typescript
public resetAutoIndexing(): void
```

##### `resetContinuousBackupEnabled` <a name="resetContinuousBackupEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetContinuousBackupEnabled"></a>

```typescript
public resetContinuousBackupEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLinks` <a name="resetLinks" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetLinks"></a>

```typescript
public resetLinks(): void
```

##### `resetStateName` <a name="resetStateName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetStateName"></a>

```typescript
public resetStateName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTerminationProtectionEnabled` <a name="resetTerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetTerminationProtectionEnabled"></a>

```typescript
public resetTerminationProtectionEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServerlessInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isConstruct"></a>

```typescript
import { serverlessInstance } from '@cdktf/provider-mongodbatlas'

serverlessInstance.ServerlessInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformElement"></a>

```typescript
import { serverlessInstance } from '@cdktf/provider-mongodbatlas'

serverlessInstance.ServerlessInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformResource"></a>

```typescript
import { serverlessInstance } from '@cdktf/provider-mongodbatlas'

serverlessInstance.ServerlessInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport"></a>

```typescript
import { serverlessInstance } from '@cdktf/provider-mongodbatlas'

serverlessInstance.ServerlessInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServerlessInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServerlessInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServerlessInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServerlessInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connectionStringsPrivateEndpointSrv">connectionStringsPrivateEndpointSrv</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connectionStringsStandardSrv">connectionStringsStandardSrv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.createDate">createDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.links">links</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList">ServerlessInstanceLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.mongoDbVersion">mongoDbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList">ServerlessInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.autoIndexingInput">autoIndexingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.continuousBackupEnabledInput">continuousBackupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.linksInput">linksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks">ServerlessInstanceLinks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsBackingProviderNameInput">providerSettingsBackingProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsProviderNameInput">providerSettingsProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsRegionNameInput">providerSettingsRegionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.stateNameInput">stateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags">ServerlessInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terminationProtectionEnabledInput">terminationProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.autoIndexing">autoIndexing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.continuousBackupEnabled">continuousBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsBackingProviderName">providerSettingsBackingProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsProviderName">providerSettingsProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsRegionName">providerSettingsRegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.stateName">stateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionStringsPrivateEndpointSrv`<sup>Required</sup> <a name="connectionStringsPrivateEndpointSrv" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connectionStringsPrivateEndpointSrv"></a>

```typescript
public readonly connectionStringsPrivateEndpointSrv: string[];
```

- *Type:* string[]

---

##### `connectionStringsStandardSrv`<sup>Required</sup> <a name="connectionStringsStandardSrv" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connectionStringsStandardSrv"></a>

```typescript
public readonly connectionStringsStandardSrv: string;
```

- *Type:* string

---

##### `createDate`<sup>Required</sup> <a name="createDate" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.createDate"></a>

```typescript
public readonly createDate: string;
```

- *Type:* string

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.links"></a>

```typescript
public readonly links: ServerlessInstanceLinksList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList">ServerlessInstanceLinksList</a>

---

##### `mongoDbVersion`<sup>Required</sup> <a name="mongoDbVersion" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.mongoDbVersion"></a>

```typescript
public readonly mongoDbVersion: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tags"></a>

```typescript
public readonly tags: ServerlessInstanceTagsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList">ServerlessInstanceTagsList</a>

---

##### `autoIndexingInput`<sup>Optional</sup> <a name="autoIndexingInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.autoIndexingInput"></a>

```typescript
public readonly autoIndexingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `continuousBackupEnabledInput`<sup>Optional</sup> <a name="continuousBackupEnabledInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.continuousBackupEnabledInput"></a>

```typescript
public readonly continuousBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linksInput`<sup>Optional</sup> <a name="linksInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.linksInput"></a>

```typescript
public readonly linksInput: IResolvable | ServerlessInstanceLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks">ServerlessInstanceLinks</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `providerSettingsBackingProviderNameInput`<sup>Optional</sup> <a name="providerSettingsBackingProviderNameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsBackingProviderNameInput"></a>

```typescript
public readonly providerSettingsBackingProviderNameInput: string;
```

- *Type:* string

---

##### `providerSettingsProviderNameInput`<sup>Optional</sup> <a name="providerSettingsProviderNameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsProviderNameInput"></a>

```typescript
public readonly providerSettingsProviderNameInput: string;
```

- *Type:* string

---

##### `providerSettingsRegionNameInput`<sup>Optional</sup> <a name="providerSettingsRegionNameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsRegionNameInput"></a>

```typescript
public readonly providerSettingsRegionNameInput: string;
```

- *Type:* string

---

##### `stateNameInput`<sup>Optional</sup> <a name="stateNameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.stateNameInput"></a>

```typescript
public readonly stateNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ServerlessInstanceTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags">ServerlessInstanceTags</a>[]

---

##### `terminationProtectionEnabledInput`<sup>Optional</sup> <a name="terminationProtectionEnabledInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terminationProtectionEnabledInput"></a>

```typescript
public readonly terminationProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoIndexing`<sup>Required</sup> <a name="autoIndexing" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.autoIndexing"></a>

```typescript
public readonly autoIndexing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `continuousBackupEnabled`<sup>Required</sup> <a name="continuousBackupEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.continuousBackupEnabled"></a>

```typescript
public readonly continuousBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerSettingsBackingProviderName`<sup>Required</sup> <a name="providerSettingsBackingProviderName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsBackingProviderName"></a>

```typescript
public readonly providerSettingsBackingProviderName: string;
```

- *Type:* string

---

##### `providerSettingsProviderName`<sup>Required</sup> <a name="providerSettingsProviderName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsProviderName"></a>

```typescript
public readonly providerSettingsProviderName: string;
```

- *Type:* string

---

##### `providerSettingsRegionName`<sup>Required</sup> <a name="providerSettingsRegionName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsRegionName"></a>

```typescript
public readonly providerSettingsRegionName: string;
```

- *Type:* string

---

##### `stateName`<sup>Required</sup> <a name="stateName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.stateName"></a>

```typescript
public readonly stateName: string;
```

- *Type:* string

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerlessInstanceConfig <a name="ServerlessInstanceConfig" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.Initializer"></a>

```typescript
import { serverlessInstance } from '@cdktf/provider-mongodbatlas'

const serverlessInstanceConfig: serverlessInstance.ServerlessInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#name ServerlessInstance#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#project_id ServerlessInstance#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsBackingProviderName">providerSettingsBackingProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#provider_settings_backing_provider_name ServerlessInstance#provider_settings_backing_provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsProviderName">providerSettingsProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#provider_settings_provider_name ServerlessInstance#provider_settings_provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsRegionName">providerSettingsRegionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#provider_settings_region_name ServerlessInstance#provider_settings_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.autoIndexing">autoIndexing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#auto_indexing ServerlessInstance#auto_indexing}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.continuousBackupEnabled">continuousBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#continuous_backup_enabled ServerlessInstance#continuous_backup_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#id ServerlessInstance#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.links">links</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks">ServerlessInstanceLinks</a>[]</code> | links block. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.stateName">stateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#state_name ServerlessInstance#state_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags">ServerlessInstanceTags</a>[]</code> | tags block. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#termination_protection_enabled ServerlessInstance#termination_protection_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#name ServerlessInstance#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#project_id ServerlessInstance#project_id}.

---

##### `providerSettingsBackingProviderName`<sup>Required</sup> <a name="providerSettingsBackingProviderName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsBackingProviderName"></a>

```typescript
public readonly providerSettingsBackingProviderName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#provider_settings_backing_provider_name ServerlessInstance#provider_settings_backing_provider_name}.

---

##### `providerSettingsProviderName`<sup>Required</sup> <a name="providerSettingsProviderName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsProviderName"></a>

```typescript
public readonly providerSettingsProviderName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#provider_settings_provider_name ServerlessInstance#provider_settings_provider_name}.

---

##### `providerSettingsRegionName`<sup>Required</sup> <a name="providerSettingsRegionName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsRegionName"></a>

```typescript
public readonly providerSettingsRegionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#provider_settings_region_name ServerlessInstance#provider_settings_region_name}.

---

##### `autoIndexing`<sup>Optional</sup> <a name="autoIndexing" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.autoIndexing"></a>

```typescript
public readonly autoIndexing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#auto_indexing ServerlessInstance#auto_indexing}.

---

##### `continuousBackupEnabled`<sup>Optional</sup> <a name="continuousBackupEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.continuousBackupEnabled"></a>

```typescript
public readonly continuousBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#continuous_backup_enabled ServerlessInstance#continuous_backup_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#id ServerlessInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `links`<sup>Optional</sup> <a name="links" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.links"></a>

```typescript
public readonly links: IResolvable | ServerlessInstanceLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks">ServerlessInstanceLinks</a>[]

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#links ServerlessInstance#links}

---

##### `stateName`<sup>Optional</sup> <a name="stateName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.stateName"></a>

```typescript
public readonly stateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#state_name ServerlessInstance#state_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ServerlessInstanceTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags">ServerlessInstanceTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#tags ServerlessInstance#tags}

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#termination_protection_enabled ServerlessInstance#termination_protection_enabled}.

---

### ServerlessInstanceLinks <a name="ServerlessInstanceLinks" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.Initializer"></a>

```typescript
import { serverlessInstance } from '@cdktf/provider-mongodbatlas'

const serverlessInstanceLinks: serverlessInstance.ServerlessInstanceLinks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.property.href">href</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#href ServerlessInstance#href}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.property.rel">rel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#rel ServerlessInstance#rel}. |

---

##### `href`<sup>Optional</sup> <a name="href" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.property.href"></a>

```typescript
public readonly href: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#href ServerlessInstance#href}.

---

##### `rel`<sup>Optional</sup> <a name="rel" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.property.rel"></a>

```typescript
public readonly rel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#rel ServerlessInstance#rel}.

---

### ServerlessInstanceTags <a name="ServerlessInstanceTags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.Initializer"></a>

```typescript
import { serverlessInstance } from '@cdktf/provider-mongodbatlas'

const serverlessInstanceTags: serverlessInstance.ServerlessInstanceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#key ServerlessInstance#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#value ServerlessInstance#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#key ServerlessInstance#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/serverless_instance#value ServerlessInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServerlessInstanceLinksList <a name="ServerlessInstanceLinksList" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer"></a>

```typescript
import { serverlessInstance } from '@cdktf/provider-mongodbatlas'

new serverlessInstance.ServerlessInstanceLinksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.get"></a>

```typescript
public get(index: number): ServerlessInstanceLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks">ServerlessInstanceLinks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServerlessInstanceLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks">ServerlessInstanceLinks</a>[]

---


### ServerlessInstanceLinksOutputReference <a name="ServerlessInstanceLinksOutputReference" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer"></a>

```typescript
import { serverlessInstance } from '@cdktf/provider-mongodbatlas'

new serverlessInstance.ServerlessInstanceLinksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resetHref">resetHref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resetRel">resetRel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHref` <a name="resetHref" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resetHref"></a>

```typescript
public resetHref(): void
```

##### `resetRel` <a name="resetRel" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resetRel"></a>

```typescript
public resetRel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.hrefInput">hrefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.relInput">relInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.href">href</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.rel">rel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks">ServerlessInstanceLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hrefInput`<sup>Optional</sup> <a name="hrefInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.hrefInput"></a>

```typescript
public readonly hrefInput: string;
```

- *Type:* string

---

##### `relInput`<sup>Optional</sup> <a name="relInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.relInput"></a>

```typescript
public readonly relInput: string;
```

- *Type:* string

---

##### `href`<sup>Required</sup> <a name="href" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.href"></a>

```typescript
public readonly href: string;
```

- *Type:* string

---

##### `rel`<sup>Required</sup> <a name="rel" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.rel"></a>

```typescript
public readonly rel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServerlessInstanceLinks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks">ServerlessInstanceLinks</a>

---


### ServerlessInstanceTagsList <a name="ServerlessInstanceTagsList" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer"></a>

```typescript
import { serverlessInstance } from '@cdktf/provider-mongodbatlas'

new serverlessInstance.ServerlessInstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.get"></a>

```typescript
public get(index: number): ServerlessInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags">ServerlessInstanceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServerlessInstanceTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags">ServerlessInstanceTags</a>[]

---


### ServerlessInstanceTagsOutputReference <a name="ServerlessInstanceTagsOutputReference" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer"></a>

```typescript
import { serverlessInstance } from '@cdktf/provider-mongodbatlas'

new serverlessInstance.ServerlessInstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags">ServerlessInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServerlessInstanceTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags">ServerlessInstanceTags</a>

---



