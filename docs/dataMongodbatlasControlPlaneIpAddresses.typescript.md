# `dataMongodbatlasControlPlaneIpAddresses` Submodule <a name="`dataMongodbatlasControlPlaneIpAddresses` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasControlPlaneIpAddresses <a name="DataMongodbatlasControlPlaneIpAddresses" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/control_plane_ip_addresses mongodbatlas_control_plane_ip_addresses}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer"></a>

```typescript
import { dataMongodbatlasControlPlaneIpAddresses } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses(scope: Construct, id: string, config?: DataMongodbatlasControlPlaneIpAddressesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig">DataMongodbatlasControlPlaneIpAddressesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig">DataMongodbatlasControlPlaneIpAddressesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasControlPlaneIpAddresses resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isConstruct"></a>

```typescript
import { dataMongodbatlasControlPlaneIpAddresses } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformElement"></a>

```typescript
import { dataMongodbatlasControlPlaneIpAddresses } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasControlPlaneIpAddresses } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasControlPlaneIpAddresses } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasControlPlaneIpAddresses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasControlPlaneIpAddresses to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasControlPlaneIpAddresses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/control_plane_ip_addresses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasControlPlaneIpAddresses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.inbound">inbound</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference">DataMongodbatlasControlPlaneIpAddressesInboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.outbound">outbound</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference">DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `inbound`<sup>Required</sup> <a name="inbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.inbound"></a>

```typescript
public readonly inbound: DataMongodbatlasControlPlaneIpAddressesInboundOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference">DataMongodbatlasControlPlaneIpAddressesInboundOutputReference</a>

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.outbound"></a>

```typescript
public readonly outbound: DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference">DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasControlPlaneIpAddressesConfig <a name="DataMongodbatlasControlPlaneIpAddressesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.Initializer"></a>

```typescript
import { dataMongodbatlasControlPlaneIpAddresses } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasControlPlaneIpAddressesConfig: dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

### DataMongodbatlasControlPlaneIpAddressesInbound <a name="DataMongodbatlasControlPlaneIpAddressesInbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound.Initializer"></a>

```typescript
import { dataMongodbatlasControlPlaneIpAddresses } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasControlPlaneIpAddressesInbound: dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound = { ... }
```


### DataMongodbatlasControlPlaneIpAddressesOutbound <a name="DataMongodbatlasControlPlaneIpAddressesOutbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound.Initializer"></a>

```typescript
import { dataMongodbatlasControlPlaneIpAddresses } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasControlPlaneIpAddressesOutbound: dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasControlPlaneIpAddressesInboundOutputReference <a name="DataMongodbatlasControlPlaneIpAddressesInboundOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasControlPlaneIpAddresses } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.aws">aws</a></code> | <code>cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.azure">azure</a></code> | <code>cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.gcp">gcp</a></code> | <code>cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound">DataMongodbatlasControlPlaneIpAddressesInbound</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.aws"></a>

```typescript
public readonly aws: StringListMap;
```

- *Type:* cdktf.StringListMap

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.azure"></a>

```typescript
public readonly azure: StringListMap;
```

- *Type:* cdktf.StringListMap

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.gcp"></a>

```typescript
public readonly gcp: StringListMap;
```

- *Type:* cdktf.StringListMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasControlPlaneIpAddressesInbound;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound">DataMongodbatlasControlPlaneIpAddressesInbound</a>

---


### DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference <a name="DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasControlPlaneIpAddresses } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.aws">aws</a></code> | <code>cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.azure">azure</a></code> | <code>cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.gcp">gcp</a></code> | <code>cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound">DataMongodbatlasControlPlaneIpAddressesOutbound</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.aws"></a>

```typescript
public readonly aws: StringListMap;
```

- *Type:* cdktf.StringListMap

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.azure"></a>

```typescript
public readonly azure: StringListMap;
```

- *Type:* cdktf.StringListMap

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.gcp"></a>

```typescript
public readonly gcp: StringListMap;
```

- *Type:* cdktf.StringListMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasControlPlaneIpAddressesOutbound;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound">DataMongodbatlasControlPlaneIpAddressesOutbound</a>

---



