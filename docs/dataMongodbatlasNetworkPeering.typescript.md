# `dataMongodbatlasNetworkPeering` Submodule <a name="`dataMongodbatlasNetworkPeering` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasNetworkPeering <a name="DataMongodbatlasNetworkPeering" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/network_peering mongodbatlas_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.Initializer"></a>

```typescript
import { dataMongodbatlasNetworkPeering } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering(scope: Construct, id: string, config: DataMongodbatlasNetworkPeeringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig">DataMongodbatlasNetworkPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig">DataMongodbatlasNetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.isConstruct"></a>

```typescript
import { dataMongodbatlasNetworkPeering } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.isTerraformElement"></a>

```typescript
import { dataMongodbatlasNetworkPeering } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasNetworkPeering } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasNetworkPeering } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasNetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.accepterRegionName">accepterRegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.atlasCidrBlock">atlasCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.atlasId">atlasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.azureDirectoryId">azureDirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.azureSubscriptionId">azureSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.errorState">errorState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.errorStateName">errorStateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.gcpProjectId">gcpProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.networkName">networkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.routeTableCidrBlock">routeTableCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.statusName">statusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.vnetName">vnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.peeringIdInput">peeringIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.peeringId">peeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accepterRegionName`<sup>Required</sup> <a name="accepterRegionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.accepterRegionName"></a>

```typescript
public readonly accepterRegionName: string;
```

- *Type:* string

---

##### `atlasCidrBlock`<sup>Required</sup> <a name="atlasCidrBlock" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.atlasCidrBlock"></a>

```typescript
public readonly atlasCidrBlock: string;
```

- *Type:* string

---

##### `atlasId`<sup>Required</sup> <a name="atlasId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.atlasId"></a>

```typescript
public readonly atlasId: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `azureDirectoryId`<sup>Required</sup> <a name="azureDirectoryId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.azureDirectoryId"></a>

```typescript
public readonly azureDirectoryId: string;
```

- *Type:* string

---

##### `azureSubscriptionId`<sup>Required</sup> <a name="azureSubscriptionId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.azureSubscriptionId"></a>

```typescript
public readonly azureSubscriptionId: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `errorState`<sup>Required</sup> <a name="errorState" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.errorState"></a>

```typescript
public readonly errorState: string;
```

- *Type:* string

---

##### `errorStateName`<sup>Required</sup> <a name="errorStateName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.errorStateName"></a>

```typescript
public readonly errorStateName: string;
```

- *Type:* string

---

##### `gcpProjectId`<sup>Required</sup> <a name="gcpProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.gcpProjectId"></a>

```typescript
public readonly gcpProjectId: string;
```

- *Type:* string

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `routeTableCidrBlock`<sup>Required</sup> <a name="routeTableCidrBlock" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.routeTableCidrBlock"></a>

```typescript
public readonly routeTableCidrBlock: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusName`<sup>Required</sup> <a name="statusName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.statusName"></a>

```typescript
public readonly statusName: string;
```

- *Type:* string

---

##### `vnetName`<sup>Required</sup> <a name="vnetName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.vnetName"></a>

```typescript
public readonly vnetName: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `peeringIdInput`<sup>Optional</sup> <a name="peeringIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.peeringIdInput"></a>

```typescript
public readonly peeringIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.peeringId"></a>

```typescript
public readonly peeringId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeering.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasNetworkPeeringConfig <a name="DataMongodbatlasNetworkPeeringConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.Initializer"></a>

```typescript
import { dataMongodbatlasNetworkPeering } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasNetworkPeeringConfig: dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.peeringId">peeringId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/network_peering#peering_id DataMongodbatlasNetworkPeering#peering_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/network_peering#project_id DataMongodbatlasNetworkPeering#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/network_peering#id DataMongodbatlasNetworkPeering#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.peeringId"></a>

```typescript
public readonly peeringId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/network_peering#peering_id DataMongodbatlasNetworkPeering#peering_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/network_peering#project_id DataMongodbatlasNetworkPeering#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasNetworkPeering.DataMongodbatlasNetworkPeeringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/network_peering#id DataMongodbatlasNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



