# `globalClusterConfig` Submodule <a name="`globalClusterConfig` Submodule" id="@cdktf/provider-mongodbatlas.globalClusterConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalClusterConfig <a name="GlobalClusterConfig" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config mongodbatlas_global_cluster_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer"></a>

```typescript
import { globalClusterConfig } from '@cdktf/provider-mongodbatlas'

new globalClusterConfig.GlobalClusterConfig(scope: Construct, id: string, config: GlobalClusterConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig">GlobalClusterConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig">GlobalClusterConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putCustomZoneMappings">putCustomZoneMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putManagedNamespaces">putManagedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetCustomZoneMappings">resetCustomZoneMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetManagedNamespaces">resetManagedNamespaces</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomZoneMappings` <a name="putCustomZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putCustomZoneMappings"></a>

```typescript
public putCustomZoneMappings(value: IResolvable | GlobalClusterConfigCustomZoneMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putCustomZoneMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>[]

---

##### `putManagedNamespaces` <a name="putManagedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putManagedNamespaces"></a>

```typescript
public putManagedNamespaces(value: IResolvable | GlobalClusterConfigManagedNamespaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putManagedNamespaces.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>[]

---

##### `resetCustomZoneMappings` <a name="resetCustomZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetCustomZoneMappings"></a>

```typescript
public resetCustomZoneMappings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagedNamespaces` <a name="resetManagedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetManagedNamespaces"></a>

```typescript
public resetManagedNamespaces(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalClusterConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isConstruct"></a>

```typescript
import { globalClusterConfig } from '@cdktf/provider-mongodbatlas'

globalClusterConfig.GlobalClusterConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformElement"></a>

```typescript
import { globalClusterConfig } from '@cdktf/provider-mongodbatlas'

globalClusterConfig.GlobalClusterConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformResource"></a>

```typescript
import { globalClusterConfig } from '@cdktf/provider-mongodbatlas'

globalClusterConfig.GlobalClusterConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport"></a>

```typescript
import { globalClusterConfig } from '@cdktf/provider-mongodbatlas'

globalClusterConfig.GlobalClusterConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GlobalClusterConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalClusterConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalClusterConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlobalClusterConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMapping">customZoneMapping</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappings">customZoneMappings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList">GlobalClusterConfigCustomZoneMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespaces">managedNamespaces</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList">GlobalClusterConfigManagedNamespacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappingsInput">customZoneMappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespacesInput">managedNamespacesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customZoneMapping`<sup>Required</sup> <a name="customZoneMapping" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMapping"></a>

```typescript
public readonly customZoneMapping: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `customZoneMappings`<sup>Required</sup> <a name="customZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappings"></a>

```typescript
public readonly customZoneMappings: GlobalClusterConfigCustomZoneMappingsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList">GlobalClusterConfigCustomZoneMappingsList</a>

---

##### `managedNamespaces`<sup>Required</sup> <a name="managedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespaces"></a>

```typescript
public readonly managedNamespaces: GlobalClusterConfigManagedNamespacesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList">GlobalClusterConfigManagedNamespacesList</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `customZoneMappingsInput`<sup>Optional</sup> <a name="customZoneMappingsInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappingsInput"></a>

```typescript
public readonly customZoneMappingsInput: IResolvable | GlobalClusterConfigCustomZoneMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedNamespacesInput`<sup>Optional</sup> <a name="managedNamespacesInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespacesInput"></a>

```typescript
public readonly managedNamespacesInput: IResolvable | GlobalClusterConfigManagedNamespaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>[]

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalClusterConfigConfig <a name="GlobalClusterConfigConfig" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.Initializer"></a>

```typescript
import { globalClusterConfig } from '@cdktf/provider-mongodbatlas'

const globalClusterConfigConfig: globalClusterConfig.GlobalClusterConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#cluster_name GlobalClusterConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#project_id GlobalClusterConfig#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.customZoneMappings">customZoneMappings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>[]</code> | custom_zone_mappings block. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#id GlobalClusterConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.managedNamespaces">managedNamespaces</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>[]</code> | managed_namespaces block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#cluster_name GlobalClusterConfig#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#project_id GlobalClusterConfig#project_id}.

---

##### `customZoneMappings`<sup>Optional</sup> <a name="customZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.customZoneMappings"></a>

```typescript
public readonly customZoneMappings: IResolvable | GlobalClusterConfigCustomZoneMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>[]

custom_zone_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#custom_zone_mappings GlobalClusterConfig#custom_zone_mappings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#id GlobalClusterConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedNamespaces`<sup>Optional</sup> <a name="managedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.managedNamespaces"></a>

```typescript
public readonly managedNamespaces: IResolvable | GlobalClusterConfigManagedNamespaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>[]

managed_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#managed_namespaces GlobalClusterConfig#managed_namespaces}

---

### GlobalClusterConfigCustomZoneMappings <a name="GlobalClusterConfigCustomZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.Initializer"></a>

```typescript
import { globalClusterConfig } from '@cdktf/provider-mongodbatlas'

const globalClusterConfigCustomZoneMappings: globalClusterConfig.GlobalClusterConfigCustomZoneMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#location GlobalClusterConfig#location}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#zone GlobalClusterConfig#zone}. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#location GlobalClusterConfig#location}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#zone GlobalClusterConfig#zone}.

---

### GlobalClusterConfigManagedNamespaces <a name="GlobalClusterConfigManagedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.Initializer"></a>

```typescript
import { globalClusterConfig } from '@cdktf/provider-mongodbatlas'

const globalClusterConfigManagedNamespaces: globalClusterConfig.GlobalClusterConfigManagedNamespaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.collection">collection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#collection GlobalClusterConfig#collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.customShardKey">customShardKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#custom_shard_key GlobalClusterConfig#custom_shard_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.db">db</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#db GlobalClusterConfig#db}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed">isCustomShardKeyHashed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#is_custom_shard_key_hashed GlobalClusterConfig#is_custom_shard_key_hashed}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isShardKeyUnique">isShardKeyUnique</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#is_shard_key_unique GlobalClusterConfig#is_shard_key_unique}. |

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.collection"></a>

```typescript
public readonly collection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#collection GlobalClusterConfig#collection}.

---

##### `customShardKey`<sup>Required</sup> <a name="customShardKey" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.customShardKey"></a>

```typescript
public readonly customShardKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#custom_shard_key GlobalClusterConfig#custom_shard_key}.

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.db"></a>

```typescript
public readonly db: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#db GlobalClusterConfig#db}.

---

##### `isCustomShardKeyHashed`<sup>Optional</sup> <a name="isCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed"></a>

```typescript
public readonly isCustomShardKeyHashed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#is_custom_shard_key_hashed GlobalClusterConfig#is_custom_shard_key_hashed}.

---

##### `isShardKeyUnique`<sup>Optional</sup> <a name="isShardKeyUnique" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isShardKeyUnique"></a>

```typescript
public readonly isShardKeyUnique: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/global_cluster_config#is_shard_key_unique GlobalClusterConfig#is_shard_key_unique}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalClusterConfigCustomZoneMappingsList <a name="GlobalClusterConfigCustomZoneMappingsList" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer"></a>

```typescript
import { globalClusterConfig } from '@cdktf/provider-mongodbatlas'

new globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.get"></a>

```typescript
public get(index: number): GlobalClusterConfigCustomZoneMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalClusterConfigCustomZoneMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>[]

---


### GlobalClusterConfigCustomZoneMappingsOutputReference <a name="GlobalClusterConfigCustomZoneMappingsOutputReference" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer"></a>

```typescript
import { globalClusterConfig } from '@cdktf/provider-mongodbatlas'

new globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalClusterConfigCustomZoneMappings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>

---


### GlobalClusterConfigManagedNamespacesList <a name="GlobalClusterConfigManagedNamespacesList" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer"></a>

```typescript
import { globalClusterConfig } from '@cdktf/provider-mongodbatlas'

new globalClusterConfig.GlobalClusterConfigManagedNamespacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.get"></a>

```typescript
public get(index: number): GlobalClusterConfigManagedNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalClusterConfigManagedNamespaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>[]

---


### GlobalClusterConfigManagedNamespacesOutputReference <a name="GlobalClusterConfigManagedNamespacesOutputReference" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer"></a>

```typescript
import { globalClusterConfig } from '@cdktf/provider-mongodbatlas'

new globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed">resetIsCustomShardKeyHashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique">resetIsShardKeyUnique</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsCustomShardKeyHashed` <a name="resetIsCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed"></a>

```typescript
public resetIsCustomShardKeyHashed(): void
```

##### `resetIsShardKeyUnique` <a name="resetIsShardKeyUnique" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique"></a>

```typescript
public resetIsShardKeyUnique(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput">collectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput">customShardKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.dbInput">dbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput">isCustomShardKeyHashedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput">isShardKeyUniqueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collection">collection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey">customShardKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.db">db</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed">isCustomShardKeyHashed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique">isShardKeyUnique</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectionInput`<sup>Optional</sup> <a name="collectionInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput"></a>

```typescript
public readonly collectionInput: string;
```

- *Type:* string

---

##### `customShardKeyInput`<sup>Optional</sup> <a name="customShardKeyInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput"></a>

```typescript
public readonly customShardKeyInput: string;
```

- *Type:* string

---

##### `dbInput`<sup>Optional</sup> <a name="dbInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.dbInput"></a>

```typescript
public readonly dbInput: string;
```

- *Type:* string

---

##### `isCustomShardKeyHashedInput`<sup>Optional</sup> <a name="isCustomShardKeyHashedInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput"></a>

```typescript
public readonly isCustomShardKeyHashedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isShardKeyUniqueInput`<sup>Optional</sup> <a name="isShardKeyUniqueInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput"></a>

```typescript
public readonly isShardKeyUniqueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collection"></a>

```typescript
public readonly collection: string;
```

- *Type:* string

---

##### `customShardKey`<sup>Required</sup> <a name="customShardKey" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey"></a>

```typescript
public readonly customShardKey: string;
```

- *Type:* string

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.db"></a>

```typescript
public readonly db: string;
```

- *Type:* string

---

##### `isCustomShardKeyHashed`<sup>Required</sup> <a name="isCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed"></a>

```typescript
public readonly isCustomShardKeyHashed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isShardKeyUnique`<sup>Required</sup> <a name="isShardKeyUnique" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique"></a>

```typescript
public readonly isShardKeyUnique: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalClusterConfigManagedNamespaces;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>

---



