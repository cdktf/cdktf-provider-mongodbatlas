# `dataMongodbatlasFederatedDatabaseInstance` Submodule <a name="`dataMongodbatlasFederatedDatabaseInstance` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedDatabaseInstance <a name="DataMongodbatlasFederatedDatabaseInstance" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/federated_database_instance mongodbatlas_federated_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance(scope: Construct, id: string, config: DataMongodbatlasFederatedDatabaseInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig">DataMongodbatlasFederatedDatabaseInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig">DataMongodbatlasFederatedDatabaseInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.putCloudProviderConfig">putCloudProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.resetCloudProviderConfig">resetCloudProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCloudProviderConfig` <a name="putCloudProviderConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.putCloudProviderConfig"></a>

```typescript
public putCloudProviderConfig(value: DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.putCloudProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig</a>

---

##### `resetCloudProviderConfig` <a name="resetCloudProviderConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.resetCloudProviderConfig"></a>

```typescript
public resetCloudProviderConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasFederatedDatabaseInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.isConstruct"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.isTerraformElement"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasFederatedDatabaseInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasFederatedDatabaseInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasFederatedDatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/federated_database_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasFederatedDatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.cloudProviderConfig">cloudProviderConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.dataProcessRegion">dataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList">DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.storageDatabases">storageDatabases</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.storageStores">storageStores</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList">DataMongodbatlasFederatedDatabaseInstanceStorageStoresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.cloudProviderConfigInput">cloudProviderConfigInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cloudProviderConfig`<sup>Required</sup> <a name="cloudProviderConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.cloudProviderConfig"></a>

```typescript
public readonly cloudProviderConfig: DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference</a>

---

##### `dataProcessRegion`<sup>Required</sup> <a name="dataProcessRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.dataProcessRegion"></a>

```typescript
public readonly dataProcessRegion: DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList">DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList</a>

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageDatabases`<sup>Required</sup> <a name="storageDatabases" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.storageDatabases"></a>

```typescript
public readonly storageDatabases: DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList</a>

---

##### `storageStores`<sup>Required</sup> <a name="storageStores" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.storageStores"></a>

```typescript
public readonly storageStores: DataMongodbatlasFederatedDatabaseInstanceStorageStoresList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList">DataMongodbatlasFederatedDatabaseInstanceStorageStoresList</a>

---

##### `cloudProviderConfigInput`<sup>Optional</sup> <a name="cloudProviderConfigInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.cloudProviderConfigInput"></a>

```typescript
public readonly cloudProviderConfigInput: DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig <a name="DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig: dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws</a></code> | aws block. |

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig.property.aws"></a>

```typescript
public readonly aws: DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/federated_database_instance#aws DataMongodbatlasFederatedDatabaseInstance#aws}

---

### DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws <a name="DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws: dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws.property.testS3Bucket">testS3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/federated_database_instance#test_s3_bucket DataMongodbatlasFederatedDatabaseInstance#test_s3_bucket}. |

---

##### `testS3Bucket`<sup>Optional</sup> <a name="testS3Bucket" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws.property.testS3Bucket"></a>

```typescript
public readonly testS3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/federated_database_instance#test_s3_bucket DataMongodbatlasFederatedDatabaseInstance#test_s3_bucket}.

---

### DataMongodbatlasFederatedDatabaseInstanceConfig <a name="DataMongodbatlasFederatedDatabaseInstanceConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstanceConfig: dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/federated_database_instance#name DataMongodbatlasFederatedDatabaseInstance#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/federated_database_instance#project_id DataMongodbatlasFederatedDatabaseInstance#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.cloudProviderConfig">cloudProviderConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig</a></code> | cloud_provider_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/federated_database_instance#id DataMongodbatlasFederatedDatabaseInstance#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/federated_database_instance#name DataMongodbatlasFederatedDatabaseInstance#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/federated_database_instance#project_id DataMongodbatlasFederatedDatabaseInstance#project_id}.

---

##### `cloudProviderConfig`<sup>Optional</sup> <a name="cloudProviderConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.cloudProviderConfig"></a>

```typescript
public readonly cloudProviderConfig: DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig</a>

cloud_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/federated_database_instance#cloud_provider_config DataMongodbatlasFederatedDatabaseInstance#cloud_provider_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.32.0/docs/data-sources/federated_database_instance#id DataMongodbatlasFederatedDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasFederatedDatabaseInstanceDataProcessRegion <a name="DataMongodbatlasFederatedDatabaseInstanceDataProcessRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegion.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstanceDataProcessRegion: dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegion = { ... }
```


### DataMongodbatlasFederatedDatabaseInstanceStorageDatabases <a name="DataMongodbatlasFederatedDatabaseInstanceStorageDatabases" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabases.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstanceStorageDatabases: dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabases = { ... }
```


### DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollections <a name="DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollections.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollections: dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollections = { ... }
```


### DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSources <a name="DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSources" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSources.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSources: dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSources = { ... }
```


### DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViews <a name="DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViews" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViews.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViews: dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViews = { ... }
```


### DataMongodbatlasFederatedDatabaseInstanceStorageStores <a name="DataMongodbatlasFederatedDatabaseInstanceStorageStores" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStores.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstanceStorageStores: dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStores = { ... }
```


### DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreference <a name="DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreference: dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreference = { ... }
```


### DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSets <a name="DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSets" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSets.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSets: dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSets = { ... }
```


### DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags <a name="DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags: dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.resetTestS3Bucket">resetTestS3Bucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestS3Bucket` <a name="resetTestS3Bucket" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.resetTestS3Bucket"></a>

```typescript
public resetTestS3Bucket(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.iamAssumedRoleArn">iamAssumedRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.iamUserArn">iamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.testS3BucketInput">testS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.testS3Bucket">testS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `iamAssumedRoleArn`<sup>Required</sup> <a name="iamAssumedRoleArn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.iamAssumedRoleArn"></a>

```typescript
public readonly iamAssumedRoleArn: string;
```

- *Type:* string

---

##### `iamUserArn`<sup>Required</sup> <a name="iamUserArn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.iamUserArn"></a>

```typescript
public readonly iamUserArn: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `testS3BucketInput`<sup>Optional</sup> <a name="testS3BucketInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.testS3BucketInput"></a>

```typescript
public readonly testS3BucketInput: string;
```

- *Type:* string

---

##### `testS3Bucket`<sup>Required</sup> <a name="testS3Bucket" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.testS3Bucket"></a>

```typescript
public readonly testS3Bucket: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws</a>

---


### DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference <a name="DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.resetAws">resetAws</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAws` <a name="putAws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.putAws"></a>

```typescript
public putAws(value: DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws</a>

---

##### `resetAws` <a name="resetAws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.resetAws"></a>

```typescript
public resetAws(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.property.awsInput">awsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.property.aws"></a>

```typescript
public readonly aws: DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAwsOutputReference</a>

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.property.awsInput"></a>

```typescript
public readonly awsInput: DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigAws</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig">DataMongodbatlasFederatedDatabaseInstanceCloudProviderConfig</a>

---


### DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList <a name="DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference <a name="DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegion">DataMongodbatlasFederatedDatabaseInstanceDataProcessRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstanceDataProcessRegion;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceDataProcessRegion">DataMongodbatlasFederatedDatabaseInstanceDataProcessRegion</a>

---


### DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList <a name="DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference <a name="DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.allowInsecure">allowInsecure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.collection">collection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.collectionRegex">collectionRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.databaseRegex">databaseRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.datasetName">datasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.defaultFormat">defaultFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.provenanceFieldName">provenanceFieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.storeName">storeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.urls">urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSources">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.allowInsecure"></a>

```typescript
public readonly allowInsecure: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.collection"></a>

```typescript
public readonly collection: string;
```

- *Type:* string

---

##### `collectionRegex`<sup>Required</sup> <a name="collectionRegex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.collectionRegex"></a>

```typescript
public readonly collectionRegex: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `databaseRegex`<sup>Required</sup> <a name="databaseRegex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.databaseRegex"></a>

```typescript
public readonly databaseRegex: string;
```

- *Type:* string

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

---

##### `defaultFormat`<sup>Required</sup> <a name="defaultFormat" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.defaultFormat"></a>

```typescript
public readonly defaultFormat: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `provenanceFieldName`<sup>Required</sup> <a name="provenanceFieldName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.provenanceFieldName"></a>

```typescript
public readonly provenanceFieldName: string;
```

- *Type:* string

---

##### `storeName`<sup>Required</sup> <a name="storeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.storeName"></a>

```typescript
public readonly storeName: string;
```

- *Type:* string

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.urls"></a>

```typescript
public readonly urls: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSources;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSources">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSources</a>

---


### DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList <a name="DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.dataSources">dataSources</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollections">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.dataSources"></a>

```typescript
public readonly dataSources: DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollections;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollections">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollections</a>

---


### DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList <a name="DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference <a name="DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.collections">collections</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.maxWildcardCollections">maxWildcardCollections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.views">views</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabases">DataMongodbatlasFederatedDatabaseInstanceStorageDatabases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collections`<sup>Required</sup> <a name="collections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.collections"></a>

```typescript
public readonly collections: DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesCollectionsList</a>

---

##### `maxWildcardCollections`<sup>Required</sup> <a name="maxWildcardCollections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.maxWildcardCollections"></a>

```typescript
public readonly maxWildcardCollections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `views`<sup>Required</sup> <a name="views" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.views"></a>

```typescript
public readonly views: DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstanceStorageDatabases;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabases">DataMongodbatlasFederatedDatabaseInstanceStorageDatabases</a>

---


### DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList <a name="DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.pipeline">pipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViews">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViews</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.pipeline"></a>

```typescript
public readonly pipeline: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViewsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViews;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViews">DataMongodbatlasFederatedDatabaseInstanceStorageDatabasesViews</a>

---


### DataMongodbatlasFederatedDatabaseInstanceStorageStoresList <a name="DataMongodbatlasFederatedDatabaseInstanceStorageStoresList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference <a name="DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.additionalStorageClasses">additionalStorageClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.allowInsecure">allowInsecure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.defaultFormat">defaultFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.includeTags">includeTags</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.public">public</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.readPreference">readPreference</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList">DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.urls">urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStores">DataMongodbatlasFederatedDatabaseInstanceStorageStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalStorageClasses`<sup>Required</sup> <a name="additionalStorageClasses" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.additionalStorageClasses"></a>

```typescript
public readonly additionalStorageClasses: string[];
```

- *Type:* string[]

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.allowInsecure"></a>

```typescript
public readonly allowInsecure: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `defaultFormat`<sup>Required</sup> <a name="defaultFormat" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.defaultFormat"></a>

```typescript
public readonly defaultFormat: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `includeTags`<sup>Required</sup> <a name="includeTags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.includeTags"></a>

```typescript
public readonly includeTags: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.public"></a>

```typescript
public readonly public: string;
```

- *Type:* string

---

##### `readPreference`<sup>Required</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.readPreference"></a>

```typescript
public readonly readPreference: DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList">DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.urls"></a>

```typescript
public readonly urls: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstanceStorageStores;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStores">DataMongodbatlasFederatedDatabaseInstanceStorageStores</a>

---


### DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList <a name="DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference <a name="DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.maxStalenessSeconds">maxStalenessSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.tagSets">tagSets</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList">DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreference">DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxStalenessSeconds`<sup>Required</sup> <a name="maxStalenessSeconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.maxStalenessSeconds"></a>

```typescript
public readonly maxStalenessSeconds: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `tagSets`<sup>Required</sup> <a name="tagSets" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.tagSets"></a>

```typescript
public readonly tagSets: DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList">DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreference">DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreference</a>

---


### DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList <a name="DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList">DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSets">DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList">DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSets;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSets">DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSets</a>

---


### DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList <a name="DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasFederatedDatabaseInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags">DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstance.DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags">DataMongodbatlasFederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags</a>

---



