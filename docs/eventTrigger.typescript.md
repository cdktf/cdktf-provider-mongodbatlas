# `eventTrigger` Submodule <a name="`eventTrigger` Submodule" id="@cdktf/provider-mongodbatlas.eventTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventTrigger <a name="EventTrigger" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger mongodbatlas_event_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer"></a>

```typescript
import { eventTrigger } from '@cdktf/provider-mongodbatlas'

new eventTrigger.EventTrigger(scope: Construct, id: string, config: EventTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig">EventTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig">EventTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors">putEventProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigCollection">resetConfigCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigDatabase">resetConfigDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocument">resetConfigFullDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocumentBefore">resetConfigFullDocumentBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigMatch">resetConfigMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationType">resetConfigOperationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationTypes">resetConfigOperationTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProject">resetConfigProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProviders">resetConfigProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigSchedule">resetConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigServiceId">resetConfigServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetEventProcessors">resetEventProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetFunctionId">resetFunctionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetUnordered">resetUnordered</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventProcessors` <a name="putEventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors"></a>

```typescript
public putEventProcessors(value: EventTriggerEventProcessors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---

##### `resetConfigCollection` <a name="resetConfigCollection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigCollection"></a>

```typescript
public resetConfigCollection(): void
```

##### `resetConfigDatabase` <a name="resetConfigDatabase" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigDatabase"></a>

```typescript
public resetConfigDatabase(): void
```

##### `resetConfigFullDocument` <a name="resetConfigFullDocument" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocument"></a>

```typescript
public resetConfigFullDocument(): void
```

##### `resetConfigFullDocumentBefore` <a name="resetConfigFullDocumentBefore" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocumentBefore"></a>

```typescript
public resetConfigFullDocumentBefore(): void
```

##### `resetConfigMatch` <a name="resetConfigMatch" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigMatch"></a>

```typescript
public resetConfigMatch(): void
```

##### `resetConfigOperationType` <a name="resetConfigOperationType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationType"></a>

```typescript
public resetConfigOperationType(): void
```

##### `resetConfigOperationTypes` <a name="resetConfigOperationTypes" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationTypes"></a>

```typescript
public resetConfigOperationTypes(): void
```

##### `resetConfigProject` <a name="resetConfigProject" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProject"></a>

```typescript
public resetConfigProject(): void
```

##### `resetConfigProviders` <a name="resetConfigProviders" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProviders"></a>

```typescript
public resetConfigProviders(): void
```

##### `resetConfigSchedule` <a name="resetConfigSchedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigSchedule"></a>

```typescript
public resetConfigSchedule(): void
```

##### `resetConfigServiceId` <a name="resetConfigServiceId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigServiceId"></a>

```typescript
public resetConfigServiceId(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetEventProcessors` <a name="resetEventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetEventProcessors"></a>

```typescript
public resetEventProcessors(): void
```

##### `resetFunctionId` <a name="resetFunctionId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetFunctionId"></a>

```typescript
public resetFunctionId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetId"></a>

```typescript
public resetId(): void
```

##### `resetUnordered` <a name="resetUnordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetUnordered"></a>

```typescript
public resetUnordered(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isConstruct"></a>

```typescript
import { eventTrigger } from '@cdktf/provider-mongodbatlas'

eventTrigger.EventTrigger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement"></a>

```typescript
import { eventTrigger } from '@cdktf/provider-mongodbatlas'

eventTrigger.EventTrigger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource"></a>

```typescript
import { eventTrigger } from '@cdktf/provider-mongodbatlas'

eventTrigger.EventTrigger.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport"></a>

```typescript
import { eventTrigger } from '@cdktf/provider-mongodbatlas'

eventTrigger.EventTrigger.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EventTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleType">configScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessors">eventProcessors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference">EventTriggerEventProcessorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.triggerId">triggerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollectionInput">configCollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabaseInput">configDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBeforeInput">configFullDocumentBeforeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentInput">configFullDocumentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatchInput">configMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypeInput">configOperationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypesInput">configOperationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProjectInput">configProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProvidersInput">configProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleInput">configScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceIdInput">configServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessorsInput">eventProcessorsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionIdInput">functionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unorderedInput">unorderedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollection">configCollection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabase">configDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocument">configFullDocument</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBefore">configFullDocumentBefore</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatch">configMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationType">configOperationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypes">configOperationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProject">configProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProviders">configProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configSchedule">configSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceId">configServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unordered">unordered</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configScheduleType`<sup>Required</sup> <a name="configScheduleType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleType"></a>

```typescript
public readonly configScheduleType: string;
```

- *Type:* string

---

##### `eventProcessors`<sup>Required</sup> <a name="eventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessors"></a>

```typescript
public readonly eventProcessors: EventTriggerEventProcessorsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference">EventTriggerEventProcessorsOutputReference</a>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.triggerId"></a>

```typescript
public readonly triggerId: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `configCollectionInput`<sup>Optional</sup> <a name="configCollectionInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollectionInput"></a>

```typescript
public readonly configCollectionInput: string;
```

- *Type:* string

---

##### `configDatabaseInput`<sup>Optional</sup> <a name="configDatabaseInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabaseInput"></a>

```typescript
public readonly configDatabaseInput: string;
```

- *Type:* string

---

##### `configFullDocumentBeforeInput`<sup>Optional</sup> <a name="configFullDocumentBeforeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBeforeInput"></a>

```typescript
public readonly configFullDocumentBeforeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configFullDocumentInput`<sup>Optional</sup> <a name="configFullDocumentInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentInput"></a>

```typescript
public readonly configFullDocumentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configMatchInput`<sup>Optional</sup> <a name="configMatchInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatchInput"></a>

```typescript
public readonly configMatchInput: string;
```

- *Type:* string

---

##### `configOperationTypeInput`<sup>Optional</sup> <a name="configOperationTypeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypeInput"></a>

```typescript
public readonly configOperationTypeInput: string;
```

- *Type:* string

---

##### `configOperationTypesInput`<sup>Optional</sup> <a name="configOperationTypesInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypesInput"></a>

```typescript
public readonly configOperationTypesInput: string[];
```

- *Type:* string[]

---

##### `configProjectInput`<sup>Optional</sup> <a name="configProjectInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProjectInput"></a>

```typescript
public readonly configProjectInput: string;
```

- *Type:* string

---

##### `configProvidersInput`<sup>Optional</sup> <a name="configProvidersInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProvidersInput"></a>

```typescript
public readonly configProvidersInput: string[];
```

- *Type:* string[]

---

##### `configScheduleInput`<sup>Optional</sup> <a name="configScheduleInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleInput"></a>

```typescript
public readonly configScheduleInput: string;
```

- *Type:* string

---

##### `configServiceIdInput`<sup>Optional</sup> <a name="configServiceIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceIdInput"></a>

```typescript
public readonly configServiceIdInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventProcessorsInput`<sup>Optional</sup> <a name="eventProcessorsInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessorsInput"></a>

```typescript
public readonly eventProcessorsInput: EventTriggerEventProcessors;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionIdInput"></a>

```typescript
public readonly functionIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `unorderedInput`<sup>Optional</sup> <a name="unorderedInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unorderedInput"></a>

```typescript
public readonly unorderedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `configCollection`<sup>Required</sup> <a name="configCollection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollection"></a>

```typescript
public readonly configCollection: string;
```

- *Type:* string

---

##### `configDatabase`<sup>Required</sup> <a name="configDatabase" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabase"></a>

```typescript
public readonly configDatabase: string;
```

- *Type:* string

---

##### `configFullDocument`<sup>Required</sup> <a name="configFullDocument" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocument"></a>

```typescript
public readonly configFullDocument: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configFullDocumentBefore`<sup>Required</sup> <a name="configFullDocumentBefore" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBefore"></a>

```typescript
public readonly configFullDocumentBefore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configMatch`<sup>Required</sup> <a name="configMatch" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatch"></a>

```typescript
public readonly configMatch: string;
```

- *Type:* string

---

##### `configOperationType`<sup>Required</sup> <a name="configOperationType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationType"></a>

```typescript
public readonly configOperationType: string;
```

- *Type:* string

---

##### `configOperationTypes`<sup>Required</sup> <a name="configOperationTypes" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypes"></a>

```typescript
public readonly configOperationTypes: string[];
```

- *Type:* string[]

---

##### `configProject`<sup>Required</sup> <a name="configProject" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProject"></a>

```typescript
public readonly configProject: string;
```

- *Type:* string

---

##### `configProviders`<sup>Required</sup> <a name="configProviders" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProviders"></a>

```typescript
public readonly configProviders: string[];
```

- *Type:* string[]

---

##### `configSchedule`<sup>Required</sup> <a name="configSchedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configSchedule"></a>

```typescript
public readonly configSchedule: string;
```

- *Type:* string

---

##### `configServiceId`<sup>Required</sup> <a name="configServiceId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceId"></a>

```typescript
public readonly configServiceId: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unordered`<sup>Required</sup> <a name="unordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unordered"></a>

```typescript
public readonly unordered: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventTriggerConfig <a name="EventTriggerConfig" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.Initializer"></a>

```typescript
import { eventTrigger } from '@cdktf/provider-mongodbatlas'

const eventTriggerConfig: eventTrigger.EventTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#app_id EventTrigger#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#name EventTrigger#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#project_id EventTrigger#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#type EventTrigger#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configCollection">configCollection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_collection EventTrigger#config_collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configDatabase">configDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_database EventTrigger#config_database}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocument">configFullDocument</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_full_document EventTrigger#config_full_document}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocumentBefore">configFullDocumentBefore</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_full_document_before EventTrigger#config_full_document_before}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configMatch">configMatch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_match EventTrigger#config_match}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationType">configOperationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_operation_type EventTrigger#config_operation_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationTypes">configOperationTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_operation_types EventTrigger#config_operation_types}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProject">configProject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_project EventTrigger#config_project}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProviders">configProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_providers EventTrigger#config_providers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configSchedule">configSchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_schedule EventTrigger#config_schedule}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configServiceId">configServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_service_id EventTrigger#config_service_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#disabled EventTrigger#disabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.eventProcessors">eventProcessors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | event_processors block. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.functionId">functionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#function_id EventTrigger#function_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#id EventTrigger#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.unordered">unordered</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#unordered EventTrigger#unordered}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#app_id EventTrigger#app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#name EventTrigger#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#project_id EventTrigger#project_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#type EventTrigger#type}.

---

##### `configCollection`<sup>Optional</sup> <a name="configCollection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configCollection"></a>

```typescript
public readonly configCollection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_collection EventTrigger#config_collection}.

---

##### `configDatabase`<sup>Optional</sup> <a name="configDatabase" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configDatabase"></a>

```typescript
public readonly configDatabase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_database EventTrigger#config_database}.

---

##### `configFullDocument`<sup>Optional</sup> <a name="configFullDocument" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocument"></a>

```typescript
public readonly configFullDocument: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_full_document EventTrigger#config_full_document}.

---

##### `configFullDocumentBefore`<sup>Optional</sup> <a name="configFullDocumentBefore" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocumentBefore"></a>

```typescript
public readonly configFullDocumentBefore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_full_document_before EventTrigger#config_full_document_before}.

---

##### `configMatch`<sup>Optional</sup> <a name="configMatch" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configMatch"></a>

```typescript
public readonly configMatch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_match EventTrigger#config_match}.

---

##### `configOperationType`<sup>Optional</sup> <a name="configOperationType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationType"></a>

```typescript
public readonly configOperationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_operation_type EventTrigger#config_operation_type}.

---

##### `configOperationTypes`<sup>Optional</sup> <a name="configOperationTypes" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationTypes"></a>

```typescript
public readonly configOperationTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_operation_types EventTrigger#config_operation_types}.

---

##### `configProject`<sup>Optional</sup> <a name="configProject" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProject"></a>

```typescript
public readonly configProject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_project EventTrigger#config_project}.

---

##### `configProviders`<sup>Optional</sup> <a name="configProviders" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProviders"></a>

```typescript
public readonly configProviders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_providers EventTrigger#config_providers}.

---

##### `configSchedule`<sup>Optional</sup> <a name="configSchedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configSchedule"></a>

```typescript
public readonly configSchedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_schedule EventTrigger#config_schedule}.

---

##### `configServiceId`<sup>Optional</sup> <a name="configServiceId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configServiceId"></a>

```typescript
public readonly configServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_service_id EventTrigger#config_service_id}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#disabled EventTrigger#disabled}.

---

##### `eventProcessors`<sup>Optional</sup> <a name="eventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.eventProcessors"></a>

```typescript
public readonly eventProcessors: EventTriggerEventProcessors;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

event_processors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#event_processors EventTrigger#event_processors}

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#function_id EventTrigger#function_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#id EventTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `unordered`<sup>Optional</sup> <a name="unordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.unordered"></a>

```typescript
public readonly unordered: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#unordered EventTrigger#unordered}.

---

### EventTriggerEventProcessors <a name="EventTriggerEventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.Initializer"></a>

```typescript
import { eventTrigger } from '@cdktf/provider-mongodbatlas'

const eventTriggerEventProcessors: eventTrigger.EventTriggerEventProcessors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.property.awsEventbridge">awsEventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | aws_eventbridge block. |

---

##### `awsEventbridge`<sup>Optional</sup> <a name="awsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.property.awsEventbridge"></a>

```typescript
public readonly awsEventbridge: EventTriggerEventProcessorsAwsEventbridge;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

aws_eventbridge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#aws_eventbridge EventTrigger#aws_eventbridge}

---

### EventTriggerEventProcessorsAwsEventbridge <a name="EventTriggerEventProcessorsAwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.Initializer"></a>

```typescript
import { eventTrigger } from '@cdktf/provider-mongodbatlas'

const eventTriggerEventProcessorsAwsEventbridge: eventTrigger.EventTriggerEventProcessorsAwsEventbridge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configAccountId">configAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_account_id EventTrigger#config_account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configRegion">configRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_region EventTrigger#config_region}. |

---

##### `configAccountId`<sup>Optional</sup> <a name="configAccountId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configAccountId"></a>

```typescript
public readonly configAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_account_id EventTrigger#config_account_id}.

---

##### `configRegion`<sup>Optional</sup> <a name="configRegion" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configRegion"></a>

```typescript
public readonly configRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/event_trigger#config_region EventTrigger#config_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventTriggerEventProcessorsAwsEventbridgeOutputReference <a name="EventTriggerEventProcessorsAwsEventbridgeOutputReference" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer"></a>

```typescript
import { eventTrigger } from '@cdktf/provider-mongodbatlas'

new eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigAccountId">resetConfigAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigRegion">resetConfigRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigAccountId` <a name="resetConfigAccountId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigAccountId"></a>

```typescript
public resetConfigAccountId(): void
```

##### `resetConfigRegion` <a name="resetConfigRegion" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigRegion"></a>

```typescript
public resetConfigRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountIdInput">configAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegionInput">configRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId">configAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion">configRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configAccountIdInput`<sup>Optional</sup> <a name="configAccountIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountIdInput"></a>

```typescript
public readonly configAccountIdInput: string;
```

- *Type:* string

---

##### `configRegionInput`<sup>Optional</sup> <a name="configRegionInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegionInput"></a>

```typescript
public readonly configRegionInput: string;
```

- *Type:* string

---

##### `configAccountId`<sup>Required</sup> <a name="configAccountId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId"></a>

```typescript
public readonly configAccountId: string;
```

- *Type:* string

---

##### `configRegion`<sup>Required</sup> <a name="configRegion" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion"></a>

```typescript
public readonly configRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventTriggerEventProcessorsAwsEventbridge;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---


### EventTriggerEventProcessorsOutputReference <a name="EventTriggerEventProcessorsOutputReference" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer"></a>

```typescript
import { eventTrigger } from '@cdktf/provider-mongodbatlas'

new eventTrigger.EventTriggerEventProcessorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge">putAwsEventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resetAwsEventbridge">resetAwsEventbridge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsEventbridge` <a name="putAwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge"></a>

```typescript
public putAwsEventbridge(value: EventTriggerEventProcessorsAwsEventbridge): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---

##### `resetAwsEventbridge` <a name="resetAwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resetAwsEventbridge"></a>

```typescript
public resetAwsEventbridge(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridge">awsEventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference">EventTriggerEventProcessorsAwsEventbridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridgeInput">awsEventbridgeInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsEventbridge`<sup>Required</sup> <a name="awsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridge"></a>

```typescript
public readonly awsEventbridge: EventTriggerEventProcessorsAwsEventbridgeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference">EventTriggerEventProcessorsAwsEventbridgeOutputReference</a>

---

##### `awsEventbridgeInput`<sup>Optional</sup> <a name="awsEventbridgeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridgeInput"></a>

```typescript
public readonly awsEventbridgeInput: EventTriggerEventProcessorsAwsEventbridge;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventTriggerEventProcessors;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---



