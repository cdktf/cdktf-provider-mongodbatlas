# `dataMongodbatlasDataLakePipelineRuns` Submodule <a name="`dataMongodbatlasDataLakePipelineRuns` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasDataLakePipelineRuns <a name="DataMongodbatlasDataLakePipelineRuns" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/data_lake_pipeline_runs mongodbatlas_data_lake_pipeline_runs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelineRuns } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns(scope: Construct, id: string, config: DataMongodbatlasDataLakePipelineRunsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig">DataMongodbatlasDataLakePipelineRunsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig">DataMongodbatlasDataLakePipelineRunsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasDataLakePipelineRuns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.isConstruct"></a>

```typescript
import { dataMongodbatlasDataLakePipelineRuns } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.isTerraformElement"></a>

```typescript
import { dataMongodbatlasDataLakePipelineRuns } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasDataLakePipelineRuns } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasDataLakePipelineRuns } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasDataLakePipelineRuns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasDataLakePipelineRuns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasDataLakePipelineRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/data_lake_pipeline_runs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasDataLakePipelineRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList">DataMongodbatlasDataLakePipelineRunsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.pipelineNameInput">pipelineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.pipelineName">pipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.results"></a>

```typescript
public readonly results: DataMongodbatlasDataLakePipelineRunsResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList">DataMongodbatlasDataLakePipelineRunsResultsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pipelineNameInput`<sup>Optional</sup> <a name="pipelineNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.pipelineNameInput"></a>

```typescript
public readonly pipelineNameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRuns.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasDataLakePipelineRunsConfig <a name="DataMongodbatlasDataLakePipelineRunsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelineRuns } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasDataLakePipelineRunsConfig: dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.pipelineName">pipelineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/data_lake_pipeline_runs#pipeline_name DataMongodbatlasDataLakePipelineRuns#pipeline_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/data_lake_pipeline_runs#project_id DataMongodbatlasDataLakePipelineRuns#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/data_lake_pipeline_runs#id DataMongodbatlasDataLakePipelineRuns#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/data_lake_pipeline_runs#pipeline_name DataMongodbatlasDataLakePipelineRuns#pipeline_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/data_lake_pipeline_runs#project_id DataMongodbatlasDataLakePipelineRuns#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/data_lake_pipeline_runs#id DataMongodbatlasDataLakePipelineRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasDataLakePipelineRunsResults <a name="DataMongodbatlasDataLakePipelineRunsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResults.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelineRuns } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasDataLakePipelineRunsResults: dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResults = { ... }
```


### DataMongodbatlasDataLakePipelineRunsResultsStats <a name="DataMongodbatlasDataLakePipelineRunsResultsStats" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStats.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelineRuns } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasDataLakePipelineRunsResultsStats: dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStats = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasDataLakePipelineRunsResultsList <a name="DataMongodbatlasDataLakePipelineRunsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelineRuns } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasDataLakePipelineRunsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasDataLakePipelineRunsResultsOutputReference <a name="DataMongodbatlasDataLakePipelineRunsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelineRuns } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.backupFrequencyType">backupFrequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.phase">phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.pipelineRunId">pipelineRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.stats">stats</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList">DataMongodbatlasDataLakePipelineRunsResultsStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResults">DataMongodbatlasDataLakePipelineRunsResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupFrequencyType`<sup>Required</sup> <a name="backupFrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.backupFrequencyType"></a>

```typescript
public readonly backupFrequencyType: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `pipelineRunId`<sup>Required</sup> <a name="pipelineRunId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.pipelineRunId"></a>

```typescript
public readonly pipelineRunId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stats`<sup>Required</sup> <a name="stats" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.stats"></a>

```typescript
public readonly stats: DataMongodbatlasDataLakePipelineRunsResultsStatsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList">DataMongodbatlasDataLakePipelineRunsResultsStatsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasDataLakePipelineRunsResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResults">DataMongodbatlasDataLakePipelineRunsResults</a>

---


### DataMongodbatlasDataLakePipelineRunsResultsStatsList <a name="DataMongodbatlasDataLakePipelineRunsResultsStatsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelineRuns } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference <a name="DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasDataLakePipelineRuns } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.property.bytesExported">bytesExported</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.property.numDocs">numDocs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStats">DataMongodbatlasDataLakePipelineRunsResultsStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bytesExported`<sup>Required</sup> <a name="bytesExported" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.property.bytesExported"></a>

```typescript
public readonly bytesExported: number;
```

- *Type:* number

---

##### `numDocs`<sup>Required</sup> <a name="numDocs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.property.numDocs"></a>

```typescript
public readonly numDocs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasDataLakePipelineRunsResultsStats;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDataLakePipelineRuns.DataMongodbatlasDataLakePipelineRunsResultsStats">DataMongodbatlasDataLakePipelineRunsResultsStats</a>

---



