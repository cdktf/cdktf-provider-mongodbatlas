# `dataMongodbatlasClusterOutageSimulation` Submodule <a name="`dataMongodbatlasClusterOutageSimulation` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasClusterOutageSimulation <a name="DataMongodbatlasClusterOutageSimulation" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cluster_outage_simulation mongodbatlas_cluster_outage_simulation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.Initializer"></a>

```typescript
import { dataMongodbatlasClusterOutageSimulation } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation(scope: Construct, id: string, config: DataMongodbatlasClusterOutageSimulationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig">DataMongodbatlasClusterOutageSimulationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig">DataMongodbatlasClusterOutageSimulationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasClusterOutageSimulation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.isConstruct"></a>

```typescript
import { dataMongodbatlasClusterOutageSimulation } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.isTerraformElement"></a>

```typescript
import { dataMongodbatlasClusterOutageSimulation } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasClusterOutageSimulation } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasClusterOutageSimulation } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasClusterOutageSimulation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasClusterOutageSimulation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasClusterOutageSimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cluster_outage_simulation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasClusterOutageSimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.outageFilters">outageFilters</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList">DataMongodbatlasClusterOutageSimulationOutageFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.simulationId">simulationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.startRequestDate">startRequestDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `outageFilters`<sup>Required</sup> <a name="outageFilters" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.outageFilters"></a>

```typescript
public readonly outageFilters: DataMongodbatlasClusterOutageSimulationOutageFiltersList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList">DataMongodbatlasClusterOutageSimulationOutageFiltersList</a>

---

##### `simulationId`<sup>Required</sup> <a name="simulationId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.simulationId"></a>

```typescript
public readonly simulationId: string;
```

- *Type:* string

---

##### `startRequestDate`<sup>Required</sup> <a name="startRequestDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.startRequestDate"></a>

```typescript
public readonly startRequestDate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasClusterOutageSimulationConfig <a name="DataMongodbatlasClusterOutageSimulationConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.Initializer"></a>

```typescript
import { dataMongodbatlasClusterOutageSimulation } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasClusterOutageSimulationConfig: dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cluster_outage_simulation#cluster_name DataMongodbatlasClusterOutageSimulation#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cluster_outage_simulation#project_id DataMongodbatlasClusterOutageSimulation#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cluster_outage_simulation#id DataMongodbatlasClusterOutageSimulation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cluster_outage_simulation#cluster_name DataMongodbatlasClusterOutageSimulation#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cluster_outage_simulation#project_id DataMongodbatlasClusterOutageSimulation#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cluster_outage_simulation#id DataMongodbatlasClusterOutageSimulation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasClusterOutageSimulationOutageFilters <a name="DataMongodbatlasClusterOutageSimulationOutageFilters" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFilters.Initializer"></a>

```typescript
import { dataMongodbatlasClusterOutageSimulation } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasClusterOutageSimulationOutageFilters: dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFilters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasClusterOutageSimulationOutageFiltersList <a name="DataMongodbatlasClusterOutageSimulationOutageFiltersList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.Initializer"></a>

```typescript
import { dataMongodbatlasClusterOutageSimulation } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.get"></a>

```typescript
public get(index: number): DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference <a name="DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasClusterOutageSimulation } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFilters">DataMongodbatlasClusterOutageSimulationOutageFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasClusterOutageSimulationOutageFilters;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasClusterOutageSimulation.DataMongodbatlasClusterOutageSimulationOutageFilters">DataMongodbatlasClusterOutageSimulationOutageFilters</a>

---



