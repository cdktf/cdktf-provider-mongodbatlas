# `dataMongodbatlasEncryptionAtRest` Submodule <a name="`dataMongodbatlasEncryptionAtRest` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasEncryptionAtRest <a name="DataMongodbatlasEncryptionAtRest" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/encryption_at_rest mongodbatlas_encryption_at_rest}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.Initializer"></a>

```typescript
import { dataMongodbatlasEncryptionAtRest } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest(scope: Construct, id: string, config: DataMongodbatlasEncryptionAtRestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig">DataMongodbatlasEncryptionAtRestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig">DataMongodbatlasEncryptionAtRestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasEncryptionAtRest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.isConstruct"></a>

```typescript
import { dataMongodbatlasEncryptionAtRest } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.isTerraformElement"></a>

```typescript
import { dataMongodbatlasEncryptionAtRest } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasEncryptionAtRest } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasEncryptionAtRest } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasEncryptionAtRest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasEncryptionAtRest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasEncryptionAtRest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/encryption_at_rest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasEncryptionAtRest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.awsKmsConfig">awsKmsConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference">DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.azureKeyVaultConfig">azureKeyVaultConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference">DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.enabledForSearchNodes">enabledForSearchNodes</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.googleCloudKmsConfig">googleCloudKmsConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference">DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `awsKmsConfig`<sup>Required</sup> <a name="awsKmsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.awsKmsConfig"></a>

```typescript
public readonly awsKmsConfig: DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference">DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference</a>

---

##### `azureKeyVaultConfig`<sup>Required</sup> <a name="azureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.azureKeyVaultConfig"></a>

```typescript
public readonly azureKeyVaultConfig: DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference">DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference</a>

---

##### `enabledForSearchNodes`<sup>Required</sup> <a name="enabledForSearchNodes" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.enabledForSearchNodes"></a>

```typescript
public readonly enabledForSearchNodes: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `googleCloudKmsConfig`<sup>Required</sup> <a name="googleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.googleCloudKmsConfig"></a>

```typescript
public readonly googleCloudKmsConfig: DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference">DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasEncryptionAtRestAwsKmsConfig <a name="DataMongodbatlasEncryptionAtRestAwsKmsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfig.Initializer"></a>

```typescript
import { dataMongodbatlasEncryptionAtRest } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasEncryptionAtRestAwsKmsConfig: dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfig = { ... }
```


### DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig <a name="DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig.Initializer"></a>

```typescript
import { dataMongodbatlasEncryptionAtRest } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasEncryptionAtRestAzureKeyVaultConfig: dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig = { ... }
```


### DataMongodbatlasEncryptionAtRestConfig <a name="DataMongodbatlasEncryptionAtRestConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.Initializer"></a>

```typescript
import { dataMongodbatlasEncryptionAtRest } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasEncryptionAtRestConfig: dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/encryption_at_rest#project_id DataMongodbatlasEncryptionAtRest#project_id}

---

### DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig <a name="DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig.Initializer"></a>

```typescript
import { dataMongodbatlasEncryptionAtRest } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig: dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference <a name="DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasEncryptionAtRest } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyId">customerMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.requirePrivateNetworking">requirePrivateNetworking</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.valid">valid</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfig">DataMongodbatlasEncryptionAtRestAwsKmsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `customerMasterKeyId`<sup>Required</sup> <a name="customerMasterKeyId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyId"></a>

```typescript
public readonly customerMasterKeyId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `requirePrivateNetworking`<sup>Required</sup> <a name="requirePrivateNetworking" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.requirePrivateNetworking"></a>

```typescript
public readonly requirePrivateNetworking: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `valid`<sup>Required</sup> <a name="valid" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.valid"></a>

```typescript
public readonly valid: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasEncryptionAtRestAwsKmsConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAwsKmsConfig">DataMongodbatlasEncryptionAtRestAwsKmsConfig</a>

---


### DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference <a name="DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasEncryptionAtRest } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironment">azureEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifier">keyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultName">keyVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.requirePrivateNetworking">requirePrivateNetworking</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.valid">valid</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig">DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureEnvironment`<sup>Required</sup> <a name="azureEnvironment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironment"></a>

```typescript
public readonly azureEnvironment: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keyIdentifier`<sup>Required</sup> <a name="keyIdentifier" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifier"></a>

```typescript
public readonly keyIdentifier: string;
```

- *Type:* string

---

##### `keyVaultName`<sup>Required</sup> <a name="keyVaultName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultName"></a>

```typescript
public readonly keyVaultName: string;
```

- *Type:* string

---

##### `requirePrivateNetworking`<sup>Required</sup> <a name="requirePrivateNetworking" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.requirePrivateNetworking"></a>

```typescript
public readonly requirePrivateNetworking: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `valid`<sup>Required</sup> <a name="valid" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.valid"></a>

```typescript
public readonly valid: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig">DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig</a>

---


### DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference <a name="DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasEncryptionAtRest } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceId">keyVersionResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKey">serviceAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.valid">valid</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig">DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keyVersionResourceId`<sup>Required</sup> <a name="keyVersionResourceId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceId"></a>

```typescript
public readonly keyVersionResourceId: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `serviceAccountKey`<sup>Required</sup> <a name="serviceAccountKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKey"></a>

```typescript
public readonly serviceAccountKey: string;
```

- *Type:* string

---

##### `valid`<sup>Required</sup> <a name="valid" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.valid"></a>

```typescript
public readonly valid: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRest.DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig">DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig</a>

---



