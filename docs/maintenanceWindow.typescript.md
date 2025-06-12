# `maintenanceWindow` Submodule <a name="`maintenanceWindow` Submodule" id="@cdktf/provider-mongodbatlas.maintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceWindow <a name="MaintenanceWindow" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window mongodbatlas_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer"></a>

```typescript
import { maintenanceWindow } from '@cdktf/provider-mongodbatlas'

new maintenanceWindow.MaintenanceWindow(scope: Construct, id: string, config: MaintenanceWindowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig">MaintenanceWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig">MaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.putProtectedHours">putProtectedHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDefer">resetAutoDefer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDeferOnceEnabled">resetAutoDeferOnceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetDefer">resetDefer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetHourOfDay">resetHourOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetProtectedHours">resetProtectedHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetStartAsap">resetStartAsap</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProtectedHours` <a name="putProtectedHours" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.putProtectedHours"></a>

```typescript
public putProtectedHours(value: MaintenanceWindowProtectedHours): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.putProtectedHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHours">MaintenanceWindowProtectedHours</a>

---

##### `resetAutoDefer` <a name="resetAutoDefer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDefer"></a>

```typescript
public resetAutoDefer(): void
```

##### `resetAutoDeferOnceEnabled` <a name="resetAutoDeferOnceEnabled" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDeferOnceEnabled"></a>

```typescript
public resetAutoDeferOnceEnabled(): void
```

##### `resetDefer` <a name="resetDefer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetDefer"></a>

```typescript
public resetDefer(): void
```

##### `resetHourOfDay` <a name="resetHourOfDay" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetHourOfDay"></a>

```typescript
public resetHourOfDay(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProtectedHours` <a name="resetProtectedHours" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetProtectedHours"></a>

```typescript
public resetProtectedHours(): void
```

##### `resetStartAsap` <a name="resetStartAsap" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetStartAsap"></a>

```typescript
public resetStartAsap(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isConstruct"></a>

```typescript
import { maintenanceWindow } from '@cdktf/provider-mongodbatlas'

maintenanceWindow.MaintenanceWindow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformElement"></a>

```typescript
import { maintenanceWindow } from '@cdktf/provider-mongodbatlas'

maintenanceWindow.MaintenanceWindow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformResource"></a>

```typescript
import { maintenanceWindow } from '@cdktf/provider-mongodbatlas'

maintenanceWindow.MaintenanceWindow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.generateConfigForImport"></a>

```typescript
import { maintenanceWindow } from '@cdktf/provider-mongodbatlas'

maintenanceWindow.MaintenanceWindow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.numberOfDeferrals">numberOfDeferrals</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.protectedHours">protectedHours</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference">MaintenanceWindowProtectedHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.timeZoneId">timeZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferInput">autoDeferInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabledInput">autoDeferOnceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.deferInput">deferInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDayInput">hourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.protectedHoursInput">protectedHoursInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHours">MaintenanceWindowProtectedHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.startAsapInput">startAsapInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDefer">autoDefer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabled">autoDeferOnceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeek">dayOfWeek</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.defer">defer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.startAsap">startAsap</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `numberOfDeferrals`<sup>Required</sup> <a name="numberOfDeferrals" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.numberOfDeferrals"></a>

```typescript
public readonly numberOfDeferrals: number;
```

- *Type:* number

---

##### `protectedHours`<sup>Required</sup> <a name="protectedHours" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.protectedHours"></a>

```typescript
public readonly protectedHours: MaintenanceWindowProtectedHoursOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference">MaintenanceWindowProtectedHoursOutputReference</a>

---

##### `timeZoneId`<sup>Required</sup> <a name="timeZoneId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.timeZoneId"></a>

```typescript
public readonly timeZoneId: string;
```

- *Type:* string

---

##### `autoDeferInput`<sup>Optional</sup> <a name="autoDeferInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferInput"></a>

```typescript
public readonly autoDeferInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoDeferOnceEnabledInput`<sup>Optional</sup> <a name="autoDeferOnceEnabledInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabledInput"></a>

```typescript
public readonly autoDeferOnceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: number;
```

- *Type:* number

---

##### `deferInput`<sup>Optional</sup> <a name="deferInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.deferInput"></a>

```typescript
public readonly deferInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDayInput"></a>

```typescript
public readonly hourOfDayInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `protectedHoursInput`<sup>Optional</sup> <a name="protectedHoursInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.protectedHoursInput"></a>

```typescript
public readonly protectedHoursInput: MaintenanceWindowProtectedHours;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHours">MaintenanceWindowProtectedHours</a>

---

##### `startAsapInput`<sup>Optional</sup> <a name="startAsapInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.startAsapInput"></a>

```typescript
public readonly startAsapInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoDefer`<sup>Required</sup> <a name="autoDefer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDefer"></a>

```typescript
public readonly autoDefer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoDeferOnceEnabled`<sup>Required</sup> <a name="autoDeferOnceEnabled" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabled"></a>

```typescript
public readonly autoDeferOnceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: number;
```

- *Type:* number

---

##### `defer`<sup>Required</sup> <a name="defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.defer"></a>

```typescript
public readonly defer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `startAsap`<sup>Required</sup> <a name="startAsap" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.startAsap"></a>

```typescript
public readonly startAsap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceWindowConfig <a name="MaintenanceWindowConfig" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.Initializer"></a>

```typescript
import { maintenanceWindow } from '@cdktf/provider-mongodbatlas'

const maintenanceWindowConfig: maintenanceWindow.MaintenanceWindowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dayOfWeek">dayOfWeek</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#day_of_week MaintenanceWindow#day_of_week}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#project_id MaintenanceWindow#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDefer">autoDefer</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#auto_defer MaintenanceWindow#auto_defer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDeferOnceEnabled">autoDeferOnceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#auto_defer_once_enabled MaintenanceWindow#auto_defer_once_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.defer">defer</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#defer MaintenanceWindow#defer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#hour_of_day MaintenanceWindow#hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#id MaintenanceWindow#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.protectedHours">protectedHours</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHours">MaintenanceWindowProtectedHours</a></code> | protected_hours block. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.startAsap">startAsap</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#start_asap MaintenanceWindow#start_asap}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#day_of_week MaintenanceWindow#day_of_week}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#project_id MaintenanceWindow#project_id}.

---

##### `autoDefer`<sup>Optional</sup> <a name="autoDefer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDefer"></a>

```typescript
public readonly autoDefer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#auto_defer MaintenanceWindow#auto_defer}.

---

##### `autoDeferOnceEnabled`<sup>Optional</sup> <a name="autoDeferOnceEnabled" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDeferOnceEnabled"></a>

```typescript
public readonly autoDeferOnceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#auto_defer_once_enabled MaintenanceWindow#auto_defer_once_enabled}.

---

##### `defer`<sup>Optional</sup> <a name="defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.defer"></a>

```typescript
public readonly defer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#defer MaintenanceWindow#defer}.

---

##### `hourOfDay`<sup>Optional</sup> <a name="hourOfDay" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#hour_of_day MaintenanceWindow#hour_of_day}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#id MaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protectedHours`<sup>Optional</sup> <a name="protectedHours" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.protectedHours"></a>

```typescript
public readonly protectedHours: MaintenanceWindowProtectedHours;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHours">MaintenanceWindowProtectedHours</a>

protected_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#protected_hours MaintenanceWindow#protected_hours}

---

##### `startAsap`<sup>Optional</sup> <a name="startAsap" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.startAsap"></a>

```typescript
public readonly startAsap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#start_asap MaintenanceWindow#start_asap}.

---

### MaintenanceWindowProtectedHours <a name="MaintenanceWindowProtectedHours" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHours.Initializer"></a>

```typescript
import { maintenanceWindow } from '@cdktf/provider-mongodbatlas'

const maintenanceWindowProtectedHours: maintenanceWindow.MaintenanceWindowProtectedHours = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHours.property.endHourOfDay">endHourOfDay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#end_hour_of_day MaintenanceWindow#end_hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHours.property.startHourOfDay">startHourOfDay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#start_hour_of_day MaintenanceWindow#start_hour_of_day}. |

---

##### `endHourOfDay`<sup>Required</sup> <a name="endHourOfDay" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHours.property.endHourOfDay"></a>

```typescript
public readonly endHourOfDay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#end_hour_of_day MaintenanceWindow#end_hour_of_day}.

---

##### `startHourOfDay`<sup>Required</sup> <a name="startHourOfDay" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHours.property.startHourOfDay"></a>

```typescript
public readonly startHourOfDay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/resources/maintenance_window#start_hour_of_day MaintenanceWindow#start_hour_of_day}.

---

## Classes <a name="Classes" id="Classes"></a>

### MaintenanceWindowProtectedHoursOutputReference <a name="MaintenanceWindowProtectedHoursOutputReference" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.Initializer"></a>

```typescript
import { maintenanceWindow } from '@cdktf/provider-mongodbatlas'

new maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.endHourOfDayInput">endHourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.startHourOfDayInput">startHourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.endHourOfDay">endHourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.startHourOfDay">startHourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHours">MaintenanceWindowProtectedHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endHourOfDayInput`<sup>Optional</sup> <a name="endHourOfDayInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.endHourOfDayInput"></a>

```typescript
public readonly endHourOfDayInput: number;
```

- *Type:* number

---

##### `startHourOfDayInput`<sup>Optional</sup> <a name="startHourOfDayInput" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.startHourOfDayInput"></a>

```typescript
public readonly startHourOfDayInput: number;
```

- *Type:* number

---

##### `endHourOfDay`<sup>Required</sup> <a name="endHourOfDay" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.endHourOfDay"></a>

```typescript
public readonly endHourOfDay: number;
```

- *Type:* number

---

##### `startHourOfDay`<sup>Required</sup> <a name="startHourOfDay" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.startHourOfDay"></a>

```typescript
public readonly startHourOfDay: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHoursOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MaintenanceWindowProtectedHours;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowProtectedHours">MaintenanceWindowProtectedHours</a>

---



