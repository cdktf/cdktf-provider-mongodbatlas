# `dataMongodbatlasCloudProviderAccessSetup` Submodule <a name="`dataMongodbatlasCloudProviderAccessSetup` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudProviderAccessSetup <a name="DataMongodbatlasCloudProviderAccessSetup" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/cloud_provider_access_setup mongodbatlas_cloud_provider_access_setup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccessSetup } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup(scope: Construct, id: string, config: DataMongodbatlasCloudProviderAccessSetupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig">DataMongodbatlasCloudProviderAccessSetupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig">DataMongodbatlasCloudProviderAccessSetupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.putAzureConfig">putAzureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.resetAzureConfig">resetAzureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAzureConfig` <a name="putAzureConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.putAzureConfig"></a>

```typescript
public putAzureConfig(value: IResolvable | DataMongodbatlasCloudProviderAccessSetupAzureConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.putAzureConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>[]

---

##### `resetAzureConfig` <a name="resetAzureConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.resetAzureConfig"></a>

```typescript
public resetAzureConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasCloudProviderAccessSetup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isConstruct"></a>

```typescript
import { dataMongodbatlasCloudProviderAccessSetup } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformElement"></a>

```typescript
import { dataMongodbatlasCloudProviderAccessSetup } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasCloudProviderAccessSetup } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasCloudProviderAccessSetup } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasCloudProviderAccessSetup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasCloudProviderAccessSetup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasCloudProviderAccessSetup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/cloud_provider_access_setup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasCloudProviderAccessSetup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.aws">aws</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.awsConfig">awsConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList">DataMongodbatlasCloudProviderAccessSetupAwsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.azureConfig">azureConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList">DataMongodbatlasCloudProviderAccessSetupAzureConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.azureConfigInput">azureConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.roleIdInput">roleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.aws"></a>

```typescript
public readonly aws: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `awsConfig`<sup>Required</sup> <a name="awsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.awsConfig"></a>

```typescript
public readonly awsConfig: DataMongodbatlasCloudProviderAccessSetupAwsConfigList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList">DataMongodbatlasCloudProviderAccessSetupAwsConfigList</a>

---

##### `azureConfig`<sup>Required</sup> <a name="azureConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.azureConfig"></a>

```typescript
public readonly azureConfig: DataMongodbatlasCloudProviderAccessSetupAzureConfigList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList">DataMongodbatlasCloudProviderAccessSetupAzureConfigList</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `azureConfigInput`<sup>Optional</sup> <a name="azureConfigInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.azureConfigInput"></a>

```typescript
public readonly azureConfigInput: IResolvable | DataMongodbatlasCloudProviderAccessSetupAzureConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.roleIdInput"></a>

```typescript
public readonly roleIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudProviderAccessSetupAwsConfig <a name="DataMongodbatlasCloudProviderAccessSetupAwsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfig.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccessSetup } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasCloudProviderAccessSetupAwsConfig: dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfig = { ... }
```


### DataMongodbatlasCloudProviderAccessSetupAzureConfig <a name="DataMongodbatlasCloudProviderAccessSetupAzureConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccessSetup } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasCloudProviderAccessSetupAzureConfig: dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig = { ... }
```


### DataMongodbatlasCloudProviderAccessSetupConfig <a name="DataMongodbatlasCloudProviderAccessSetupConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccessSetup } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasCloudProviderAccessSetupConfig: dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/cloud_provider_access_setup#project_id DataMongodbatlasCloudProviderAccessSetup#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/cloud_provider_access_setup#provider_name DataMongodbatlasCloudProviderAccessSetup#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.roleId">roleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/cloud_provider_access_setup#role_id DataMongodbatlasCloudProviderAccessSetup#role_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.azureConfig">azureConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>[]</code> | azure_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/cloud_provider_access_setup#id DataMongodbatlasCloudProviderAccessSetup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/cloud_provider_access_setup#project_id DataMongodbatlasCloudProviderAccessSetup#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/cloud_provider_access_setup#provider_name DataMongodbatlasCloudProviderAccessSetup#provider_name}.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/cloud_provider_access_setup#role_id DataMongodbatlasCloudProviderAccessSetup#role_id}.

---

##### `azureConfig`<sup>Optional</sup> <a name="azureConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.azureConfig"></a>

```typescript
public readonly azureConfig: IResolvable | DataMongodbatlasCloudProviderAccessSetupAzureConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>[]

azure_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/cloud_provider_access_setup#azure_config DataMongodbatlasCloudProviderAccessSetup#azure_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/cloud_provider_access_setup#id DataMongodbatlasCloudProviderAccessSetup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudProviderAccessSetupAwsConfigList <a name="DataMongodbatlasCloudProviderAccessSetupAwsConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccessSetup } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.get"></a>

```typescript
public get(index: number): DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference <a name="DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccessSetup } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.atlasAssumedRoleExternalId">atlasAssumedRoleExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.atlasAwsAccountArn">atlasAwsAccountArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfig">DataMongodbatlasCloudProviderAccessSetupAwsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `atlasAssumedRoleExternalId`<sup>Required</sup> <a name="atlasAssumedRoleExternalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.atlasAssumedRoleExternalId"></a>

```typescript
public readonly atlasAssumedRoleExternalId: string;
```

- *Type:* string

---

##### `atlasAwsAccountArn`<sup>Required</sup> <a name="atlasAwsAccountArn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.atlasAwsAccountArn"></a>

```typescript
public readonly atlasAwsAccountArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasCloudProviderAccessSetupAwsConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfig">DataMongodbatlasCloudProviderAccessSetupAwsConfig</a>

---


### DataMongodbatlasCloudProviderAccessSetupAzureConfigList <a name="DataMongodbatlasCloudProviderAccessSetupAzureConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccessSetup } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.get"></a>

```typescript
public get(index: number): DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataMongodbatlasCloudProviderAccessSetupAzureConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>[]

---


### DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference <a name="DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasCloudProviderAccessSetup } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.atlasAzureAppId">atlasAzureAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `atlasAzureAppId`<sup>Required</sup> <a name="atlasAzureAppId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.atlasAzureAppId"></a>

```typescript
public readonly atlasAzureAppId: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataMongodbatlasCloudProviderAccessSetupAzureConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>

---



