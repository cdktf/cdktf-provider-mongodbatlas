# `dataMongodbatlasAlertConfigurations` Submodule <a name="`dataMongodbatlasAlertConfigurations` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAlertConfigurations <a name="DataMongodbatlasAlertConfigurations" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations mongodbatlas_alert_configurations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations(scope: Construct, id: string, config: DataMongodbatlasAlertConfigurationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig">DataMongodbatlasAlertConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig">DataMongodbatlasAlertConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.putListOptions">putListOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetListOptions">resetListOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetOutputType">resetOutputType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putListOptions` <a name="putListOptions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.putListOptions"></a>

```typescript
public putListOptions(value: IResolvable | DataMongodbatlasAlertConfigurationsListOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.putListOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>[]

---

##### `resetListOptions` <a name="resetListOptions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetListOptions"></a>

```typescript
public resetListOptions(): void
```

##### `resetOutputType` <a name="resetOutputType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.resetOutputType"></a>

```typescript
public resetOutputType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasAlertConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isConstruct"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformElement"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasAlertConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasAlertConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasAlertConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasAlertConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.listOptions">listOptions</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList">DataMongodbatlasAlertConfigurationsListOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList">DataMongodbatlasAlertConfigurationsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.totalCount">totalCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.listOptionsInput">listOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.outputTypeInput">outputTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.outputType">outputType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listOptions`<sup>Required</sup> <a name="listOptions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.listOptions"></a>

```typescript
public readonly listOptions: DataMongodbatlasAlertConfigurationsListOptionsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList">DataMongodbatlasAlertConfigurationsListOptionsList</a>

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.results"></a>

```typescript
public readonly results: DataMongodbatlasAlertConfigurationsResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList">DataMongodbatlasAlertConfigurationsResultsList</a>

---

##### `totalCount`<sup>Required</sup> <a name="totalCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.totalCount"></a>

```typescript
public readonly totalCount: number;
```

- *Type:* number

---

##### `listOptionsInput`<sup>Optional</sup> <a name="listOptionsInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.listOptionsInput"></a>

```typescript
public readonly listOptionsInput: IResolvable | DataMongodbatlasAlertConfigurationsListOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>[]

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.outputTypeInput"></a>

```typescript
public readonly outputTypeInput: string[];
```

- *Type:* string[]

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.outputType"></a>

```typescript
public readonly outputType: string[];
```

- *Type:* string[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAlertConfigurationsConfig <a name="DataMongodbatlasAlertConfigurationsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAlertConfigurationsConfig: dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.listOptions">listOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>[]</code> | list_options block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.outputType">outputType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#output_type DataMongodbatlasAlertConfigurations#output_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}.

---

##### `listOptions`<sup>Optional</sup> <a name="listOptions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.listOptions"></a>

```typescript
public readonly listOptions: IResolvable | DataMongodbatlasAlertConfigurationsListOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>[]

list_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#list_options DataMongodbatlasAlertConfigurations#list_options}

---

##### `outputType`<sup>Optional</sup> <a name="outputType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsConfig.property.outputType"></a>

```typescript
public readonly outputType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#output_type DataMongodbatlasAlertConfigurations#output_type}.

---

### DataMongodbatlasAlertConfigurationsListOptions <a name="DataMongodbatlasAlertConfigurationsListOptions" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAlertConfigurationsListOptions: dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.includeCount">includeCount</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#include_count DataMongodbatlasAlertConfigurations#include_count}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#items_per_page DataMongodbatlasAlertConfigurations#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.pageNum">pageNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#page_num DataMongodbatlasAlertConfigurations#page_num}. |

---

##### `includeCount`<sup>Optional</sup> <a name="includeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.includeCount"></a>

```typescript
public readonly includeCount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#include_count DataMongodbatlasAlertConfigurations#include_count}.

---

##### `itemsPerPage`<sup>Optional</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#items_per_page DataMongodbatlasAlertConfigurations#items_per_page}.

---

##### `pageNum`<sup>Optional</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions.property.pageNum"></a>

```typescript
public readonly pageNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#page_num DataMongodbatlasAlertConfigurations#page_num}.

---

### DataMongodbatlasAlertConfigurationsResults <a name="DataMongodbatlasAlertConfigurationsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAlertConfigurationsResults: dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.property.alertConfigurationId">alertConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#alert_configuration_id DataMongodbatlasAlertConfigurations#alert_configuration_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}. |

---

##### `alertConfigurationId`<sup>Required</sup> <a name="alertConfigurationId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.property.alertConfigurationId"></a>

```typescript
public readonly alertConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#alert_configuration_id DataMongodbatlasAlertConfigurations#alert_configuration_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}.

---

### DataMongodbatlasAlertConfigurationsResultsMatcher <a name="DataMongodbatlasAlertConfigurationsResultsMatcher" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAlertConfigurationsResultsMatcher: dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher = { ... }
```


### DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig <a name="DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig: dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig = { ... }
```


### DataMongodbatlasAlertConfigurationsResultsNotification <a name="DataMongodbatlasAlertConfigurationsResultsNotification" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAlertConfigurationsResultsNotification: dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification = { ... }
```


### DataMongodbatlasAlertConfigurationsResultsOutput <a name="DataMongodbatlasAlertConfigurationsResultsOutput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAlertConfigurationsResultsOutput: dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput = { ... }
```


### DataMongodbatlasAlertConfigurationsResultsThresholdConfig <a name="DataMongodbatlasAlertConfigurationsResultsThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAlertConfigurationsResultsThresholdConfig: dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasAlertConfigurationsListOptionsList <a name="DataMongodbatlasAlertConfigurationsListOptionsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAlertConfigurationsListOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataMongodbatlasAlertConfigurationsListOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>[]

---


### DataMongodbatlasAlertConfigurationsListOptionsOutputReference <a name="DataMongodbatlasAlertConfigurationsListOptionsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetIncludeCount">resetIncludeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetItemsPerPage">resetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetPageNum">resetPageNum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeCount` <a name="resetIncludeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetIncludeCount"></a>

```typescript
public resetIncludeCount(): void
```

##### `resetItemsPerPage` <a name="resetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetItemsPerPage"></a>

```typescript
public resetItemsPerPage(): void
```

##### `resetPageNum` <a name="resetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.resetPageNum"></a>

```typescript
public resetPageNum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.includeCountInput">includeCountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.itemsPerPageInput">itemsPerPageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.pageNumInput">pageNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.includeCount">includeCount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.pageNum">pageNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeCountInput`<sup>Optional</sup> <a name="includeCountInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.includeCountInput"></a>

```typescript
public readonly includeCountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `itemsPerPageInput`<sup>Optional</sup> <a name="itemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.itemsPerPageInput"></a>

```typescript
public readonly itemsPerPageInput: number;
```

- *Type:* number

---

##### `pageNumInput`<sup>Optional</sup> <a name="pageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.pageNumInput"></a>

```typescript
public readonly pageNumInput: number;
```

- *Type:* number

---

##### `includeCount`<sup>Required</sup> <a name="includeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.includeCount"></a>

```typescript
public readonly includeCount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `pageNum`<sup>Required</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.pageNum"></a>

```typescript
public readonly pageNum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataMongodbatlasAlertConfigurationsListOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsListOptions">DataMongodbatlasAlertConfigurationsListOptions</a>

---


### DataMongodbatlasAlertConfigurationsResultsList <a name="DataMongodbatlasAlertConfigurationsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAlertConfigurationsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults">DataMongodbatlasAlertConfigurationsResults</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataMongodbatlasAlertConfigurationsResults[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults">DataMongodbatlasAlertConfigurationsResults</a>[]

---


### DataMongodbatlasAlertConfigurationsResultsMatcherList <a name="DataMongodbatlasAlertConfigurationsResultsMatcherList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher">DataMongodbatlasAlertConfigurationsResultsMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAlertConfigurationsResultsMatcher;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcher">DataMongodbatlasAlertConfigurationsResultsMatcher</a>

---


### DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList <a name="DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig">DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig">DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig</a>

---


### DataMongodbatlasAlertConfigurationsResultsNotificationList <a name="DataMongodbatlasAlertConfigurationsResultsNotificationList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.datadogApiKey">datadogApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.datadogRegion">datadogRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.delayMin">delayMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.emailEnabled">emailEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.intervalMin">intervalMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.microsoftTeamsWebhookUrl">microsoftTeamsWebhookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.mobileNumber">mobileNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.notifierId">notifierId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.opsGenieApiKey">opsGenieApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.opsGenieRegion">opsGenieRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.serviceKey">serviceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.smsEnabled">smsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.teamName">teamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.victorOpsApiKey">victorOpsApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.victorOpsRoutingKey">victorOpsRoutingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.webhookSecret">webhookSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.webhookUrl">webhookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification">DataMongodbatlasAlertConfigurationsResultsNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `datadogApiKey`<sup>Required</sup> <a name="datadogApiKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.datadogApiKey"></a>

```typescript
public readonly datadogApiKey: string;
```

- *Type:* string

---

##### `datadogRegion`<sup>Required</sup> <a name="datadogRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.datadogRegion"></a>

```typescript
public readonly datadogRegion: string;
```

- *Type:* string

---

##### `delayMin`<sup>Required</sup> <a name="delayMin" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.delayMin"></a>

```typescript
public readonly delayMin: number;
```

- *Type:* number

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `emailEnabled`<sup>Required</sup> <a name="emailEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.emailEnabled"></a>

```typescript
public readonly emailEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `intervalMin`<sup>Required</sup> <a name="intervalMin" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.intervalMin"></a>

```typescript
public readonly intervalMin: number;
```

- *Type:* number

---

##### `microsoftTeamsWebhookUrl`<sup>Required</sup> <a name="microsoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.microsoftTeamsWebhookUrl"></a>

```typescript
public readonly microsoftTeamsWebhookUrl: string;
```

- *Type:* string

---

##### `mobileNumber`<sup>Required</sup> <a name="mobileNumber" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.mobileNumber"></a>

```typescript
public readonly mobileNumber: string;
```

- *Type:* string

---

##### `notifierId`<sup>Required</sup> <a name="notifierId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.notifierId"></a>

```typescript
public readonly notifierId: string;
```

- *Type:* string

---

##### `opsGenieApiKey`<sup>Required</sup> <a name="opsGenieApiKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.opsGenieApiKey"></a>

```typescript
public readonly opsGenieApiKey: string;
```

- *Type:* string

---

##### `opsGenieRegion`<sup>Required</sup> <a name="opsGenieRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.opsGenieRegion"></a>

```typescript
public readonly opsGenieRegion: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

---

##### `smsEnabled`<sup>Required</sup> <a name="smsEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.smsEnabled"></a>

```typescript
public readonly smsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.teamName"></a>

```typescript
public readonly teamName: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `victorOpsApiKey`<sup>Required</sup> <a name="victorOpsApiKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.victorOpsApiKey"></a>

```typescript
public readonly victorOpsApiKey: string;
```

- *Type:* string

---

##### `victorOpsRoutingKey`<sup>Required</sup> <a name="victorOpsRoutingKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.victorOpsRoutingKey"></a>

```typescript
public readonly victorOpsRoutingKey: string;
```

- *Type:* string

---

##### `webhookSecret`<sup>Required</sup> <a name="webhookSecret" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.webhookSecret"></a>

```typescript
public readonly webhookSecret: string;
```

- *Type:* string

---

##### `webhookUrl`<sup>Required</sup> <a name="webhookUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.webhookUrl"></a>

```typescript
public readonly webhookUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAlertConfigurationsResultsNotification;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotification">DataMongodbatlasAlertConfigurationsResultsNotification</a>

---


### DataMongodbatlasAlertConfigurationsResultsOutputList <a name="DataMongodbatlasAlertConfigurationsResultsOutputList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAlertConfigurationsResultsOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAlertConfigurationsResultsOutputOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsOutputOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput">DataMongodbatlasAlertConfigurationsResultsOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAlertConfigurationsResultsOutput;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutput">DataMongodbatlasAlertConfigurationsResultsOutput</a>

---


### DataMongodbatlasAlertConfigurationsResultsOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.matcher">matcher</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList">DataMongodbatlasAlertConfigurationsResultsMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.metricThresholdConfig">metricThresholdConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList">DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList">DataMongodbatlasAlertConfigurationsResultsNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.output">output</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList">DataMongodbatlasAlertConfigurationsResultsOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.thresholdConfig">thresholdConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList">DataMongodbatlasAlertConfigurationsResultsThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.alertConfigurationIdInput">alertConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.alertConfigurationId">alertConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults">DataMongodbatlasAlertConfigurationsResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.matcher"></a>

```typescript
public readonly matcher: DataMongodbatlasAlertConfigurationsResultsMatcherList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMatcherList">DataMongodbatlasAlertConfigurationsResultsMatcherList</a>

---

##### `metricThresholdConfig`<sup>Required</sup> <a name="metricThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.metricThresholdConfig"></a>

```typescript
public readonly metricThresholdConfig: DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList">DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.notification"></a>

```typescript
public readonly notification: DataMongodbatlasAlertConfigurationsResultsNotificationList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsNotificationList">DataMongodbatlasAlertConfigurationsResultsNotificationList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.output"></a>

```typescript
public readonly output: DataMongodbatlasAlertConfigurationsResultsOutputList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputList">DataMongodbatlasAlertConfigurationsResultsOutputList</a>

---

##### `thresholdConfig`<sup>Required</sup> <a name="thresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.thresholdConfig"></a>

```typescript
public readonly thresholdConfig: DataMongodbatlasAlertConfigurationsResultsThresholdConfigList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList">DataMongodbatlasAlertConfigurationsResultsThresholdConfigList</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `alertConfigurationIdInput`<sup>Optional</sup> <a name="alertConfigurationIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.alertConfigurationIdInput"></a>

```typescript
public readonly alertConfigurationIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `alertConfigurationId`<sup>Required</sup> <a name="alertConfigurationId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.alertConfigurationId"></a>

```typescript
public readonly alertConfigurationId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAlertConfigurationsResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResults">DataMongodbatlasAlertConfigurationsResults</a>

---


### DataMongodbatlasAlertConfigurationsResultsThresholdConfigList <a name="DataMongodbatlasAlertConfigurationsResultsThresholdConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference <a name="DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAlertConfigurations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig">DataMongodbatlasAlertConfigurationsResultsThresholdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAlertConfigurationsResultsThresholdConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfigurations.DataMongodbatlasAlertConfigurationsResultsThresholdConfig">DataMongodbatlasAlertConfigurationsResultsThresholdConfig</a>

---



