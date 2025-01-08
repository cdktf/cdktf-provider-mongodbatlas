# `dataMongodbatlasEncryptionAtRestPrivateEndpoints` Submodule <a name="`dataMongodbatlasEncryptionAtRestPrivateEndpoints` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasEncryptionAtRestPrivateEndpoints <a name="DataMongodbatlasEncryptionAtRestPrivateEndpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/encryption_at_rest_private_endpoints mongodbatlas_encryption_at_rest_private_endpoints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer"></a>

```typescript
import { dataMongodbatlasEncryptionAtRestPrivateEndpoints } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints(scope: Construct, id: string, config: DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig">DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig">DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasEncryptionAtRestPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isConstruct"></a>

```typescript
import { dataMongodbatlasEncryptionAtRestPrivateEndpoints } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformElement"></a>

```typescript
import { dataMongodbatlasEncryptionAtRestPrivateEndpoints } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasEncryptionAtRestPrivateEndpoints } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasEncryptionAtRestPrivateEndpoints } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasEncryptionAtRestPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasEncryptionAtRestPrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasEncryptionAtRestPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/encryption_at_rest_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasEncryptionAtRestPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList">DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.cloudProviderInput">cloudProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.results"></a>

```typescript
public readonly results: DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList">DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList</a>

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.cloudProviderInput"></a>

```typescript
public readonly cloudProviderInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig <a name="DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.Initializer"></a>

```typescript
import { dataMongodbatlasEncryptionAtRestPrivateEndpoints } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasEncryptionAtRestPrivateEndpointsConfig: dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | Label that identifies the cloud provider for the Encryption At Rest private endpoint. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

Label that identifies the cloud provider for the Encryption At Rest private endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/encryption_at_rest_private_endpoints#cloud_provider DataMongodbatlasEncryptionAtRestPrivateEndpoints#cloud_provider}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/encryption_at_rest_private_endpoints#project_id DataMongodbatlasEncryptionAtRestPrivateEndpoints#project_id}

---

### DataMongodbatlasEncryptionAtRestPrivateEndpointsResults <a name="DataMongodbatlasEncryptionAtRestPrivateEndpointsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResults.Initializer"></a>

```typescript
import { dataMongodbatlasEncryptionAtRestPrivateEndpoints } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasEncryptionAtRestPrivateEndpointsResults: dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResults = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList <a name="DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasEncryptionAtRestPrivateEndpoints } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference <a name="DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasEncryptionAtRestPrivateEndpoints } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.privateEndpointConnectionName">privateEndpointConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResults">DataMongodbatlasEncryptionAtRestPrivateEndpointsResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateEndpointConnectionName`<sup>Required</sup> <a name="privateEndpointConnectionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.privateEndpointConnectionName"></a>

```typescript
public readonly privateEndpointConnectionName: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasEncryptionAtRestPrivateEndpointsResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResults">DataMongodbatlasEncryptionAtRestPrivateEndpointsResults</a>

---



