# `dataMongodbatlasEventTrigger` Submodule <a name="`dataMongodbatlasEventTrigger` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasEventTrigger <a name="DataMongodbatlasEventTrigger" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/event_trigger mongodbatlas_event_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer"></a>

```typescript
import { dataMongodbatlasEventTrigger } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger(scope: Construct, id: string, config: DataMongodbatlasEventTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig">DataMongodbatlasEventTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig">DataMongodbatlasEventTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasEventTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isConstruct"></a>

```typescript
import { dataMongodbatlasEventTrigger } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformElement"></a>

```typescript
import { dataMongodbatlasEventTrigger } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasEventTrigger } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasEventTrigger } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasEventTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasEventTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasEventTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/event_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasEventTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configCollection">configCollection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configDatabase">configDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configFullDocument">configFullDocument</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configFullDocumentBefore">configFullDocumentBefore</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configMatch">configMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configOperationType">configOperationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configOperationTypes">configOperationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configProject">configProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configProviders">configProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configSchedule">configSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configScheduleType">configScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configServiceId">configServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.eventProcessors">eventProcessors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList">DataMongodbatlasEventTriggerEventProcessorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.unordered">unordered</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.triggerIdInput">triggerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.triggerId">triggerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `configCollection`<sup>Required</sup> <a name="configCollection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configCollection"></a>

```typescript
public readonly configCollection: string;
```

- *Type:* string

---

##### `configDatabase`<sup>Required</sup> <a name="configDatabase" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configDatabase"></a>

```typescript
public readonly configDatabase: string;
```

- *Type:* string

---

##### `configFullDocument`<sup>Required</sup> <a name="configFullDocument" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configFullDocument"></a>

```typescript
public readonly configFullDocument: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `configFullDocumentBefore`<sup>Required</sup> <a name="configFullDocumentBefore" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configFullDocumentBefore"></a>

```typescript
public readonly configFullDocumentBefore: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `configMatch`<sup>Required</sup> <a name="configMatch" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configMatch"></a>

```typescript
public readonly configMatch: string;
```

- *Type:* string

---

##### `configOperationType`<sup>Required</sup> <a name="configOperationType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configOperationType"></a>

```typescript
public readonly configOperationType: string;
```

- *Type:* string

---

##### `configOperationTypes`<sup>Required</sup> <a name="configOperationTypes" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configOperationTypes"></a>

```typescript
public readonly configOperationTypes: string[];
```

- *Type:* string[]

---

##### `configProject`<sup>Required</sup> <a name="configProject" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configProject"></a>

```typescript
public readonly configProject: string;
```

- *Type:* string

---

##### `configProviders`<sup>Required</sup> <a name="configProviders" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configProviders"></a>

```typescript
public readonly configProviders: string[];
```

- *Type:* string[]

---

##### `configSchedule`<sup>Required</sup> <a name="configSchedule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configSchedule"></a>

```typescript
public readonly configSchedule: string;
```

- *Type:* string

---

##### `configScheduleType`<sup>Required</sup> <a name="configScheduleType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configScheduleType"></a>

```typescript
public readonly configScheduleType: string;
```

- *Type:* string

---

##### `configServiceId`<sup>Required</sup> <a name="configServiceId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configServiceId"></a>

```typescript
public readonly configServiceId: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `eventProcessors`<sup>Required</sup> <a name="eventProcessors" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.eventProcessors"></a>

```typescript
public readonly eventProcessors: DataMongodbatlasEventTriggerEventProcessorsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList">DataMongodbatlasEventTriggerEventProcessorsList</a>

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unordered`<sup>Required</sup> <a name="unordered" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.unordered"></a>

```typescript
public readonly unordered: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `triggerIdInput`<sup>Optional</sup> <a name="triggerIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.triggerIdInput"></a>

```typescript
public readonly triggerIdInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.triggerId"></a>

```typescript
public readonly triggerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasEventTriggerConfig <a name="DataMongodbatlasEventTriggerConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.Initializer"></a>

```typescript
import { dataMongodbatlasEventTrigger } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasEventTriggerConfig: dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/event_trigger#app_id DataMongodbatlasEventTrigger#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/event_trigger#project_id DataMongodbatlasEventTrigger#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.triggerId">triggerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/event_trigger#trigger_id DataMongodbatlasEventTrigger#trigger_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/event_trigger#id DataMongodbatlasEventTrigger#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/event_trigger#app_id DataMongodbatlasEventTrigger#app_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/event_trigger#project_id DataMongodbatlasEventTrigger#project_id}.

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.triggerId"></a>

```typescript
public readonly triggerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/event_trigger#trigger_id DataMongodbatlasEventTrigger#trigger_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/event_trigger#id DataMongodbatlasEventTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasEventTriggerEventProcessors <a name="DataMongodbatlasEventTriggerEventProcessors" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessors.Initializer"></a>

```typescript
import { dataMongodbatlasEventTrigger } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasEventTriggerEventProcessors: dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessors = { ... }
```


### DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge <a name="DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge.Initializer"></a>

```typescript
import { dataMongodbatlasEventTrigger } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasEventTriggerEventProcessorsAwsEventbridge: dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList <a name="DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer"></a>

```typescript
import { dataMongodbatlasEventTrigger } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.get"></a>

```typescript
public get(index: number): DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference <a name="DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasEventTrigger } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId">configAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion">configRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge">DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configAccountId`<sup>Required</sup> <a name="configAccountId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId"></a>

```typescript
public readonly configAccountId: string;
```

- *Type:* string

---

##### `configRegion`<sup>Required</sup> <a name="configRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion"></a>

```typescript
public readonly configRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge">DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge</a>

---


### DataMongodbatlasEventTriggerEventProcessorsList <a name="DataMongodbatlasEventTriggerEventProcessorsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer"></a>

```typescript
import { dataMongodbatlasEventTrigger } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasEventTriggerEventProcessorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasEventTriggerEventProcessorsOutputReference <a name="DataMongodbatlasEventTriggerEventProcessorsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasEventTrigger } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.awsEventbridge">awsEventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList">DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessors">DataMongodbatlasEventTriggerEventProcessors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsEventbridge`<sup>Required</sup> <a name="awsEventbridge" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.awsEventbridge"></a>

```typescript
public readonly awsEventbridge: DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList">DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasEventTriggerEventProcessors;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessors">DataMongodbatlasEventTriggerEventProcessors</a>

---



