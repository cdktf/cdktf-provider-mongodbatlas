# `dataMongodbatlasPrivateEndpointRegionalMode` Submodule <a name="`dataMongodbatlasPrivateEndpointRegionalMode` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasPrivateEndpointRegionalMode <a name="DataMongodbatlasPrivateEndpointRegionalMode" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/private_endpoint_regional_mode mongodbatlas_private_endpoint_regional_mode}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer"></a>

```typescript
import { dataMongodbatlasPrivateEndpointRegionalMode } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode(scope: Construct, id: string, config: DataMongodbatlasPrivateEndpointRegionalModeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig">DataMongodbatlasPrivateEndpointRegionalModeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig">DataMongodbatlasPrivateEndpointRegionalModeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasPrivateEndpointRegionalMode resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isConstruct"></a>

```typescript
import { dataMongodbatlasPrivateEndpointRegionalMode } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformElement"></a>

```typescript
import { dataMongodbatlasPrivateEndpointRegionalMode } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasPrivateEndpointRegionalMode } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasPrivateEndpointRegionalMode } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasPrivateEndpointRegionalMode resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasPrivateEndpointRegionalMode to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasPrivateEndpointRegionalMode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/private_endpoint_regional_mode#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasPrivateEndpointRegionalMode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalMode.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasPrivateEndpointRegionalModeConfig <a name="DataMongodbatlasPrivateEndpointRegionalModeConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.Initializer"></a>

```typescript
import { dataMongodbatlasPrivateEndpointRegionalMode } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasPrivateEndpointRegionalModeConfig: dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/private_endpoint_regional_mode#project_id DataMongodbatlasPrivateEndpointRegionalMode#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/private_endpoint_regional_mode#enabled DataMongodbatlasPrivateEndpointRegionalMode#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/private_endpoint_regional_mode#id DataMongodbatlasPrivateEndpointRegionalMode#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/private_endpoint_regional_mode#project_id DataMongodbatlasPrivateEndpointRegionalMode#project_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/private_endpoint_regional_mode#enabled DataMongodbatlasPrivateEndpointRegionalMode#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivateEndpointRegionalMode.DataMongodbatlasPrivateEndpointRegionalModeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/private_endpoint_regional_mode#id DataMongodbatlasPrivateEndpointRegionalMode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



