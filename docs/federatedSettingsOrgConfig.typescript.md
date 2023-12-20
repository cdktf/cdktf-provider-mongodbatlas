# `federatedSettingsOrgConfig` Submodule <a name="`federatedSettingsOrgConfig` Submodule" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedSettingsOrgConfig <a name="FederatedSettingsOrgConfig" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config mongodbatlas_federated_settings_org_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer"></a>

```typescript
import { federatedSettingsOrgConfig } from '@cdktf/provider-mongodbatlas'

new federatedSettingsOrgConfig.FederatedSettingsOrgConfig(scope: Construct, id: string, config: FederatedSettingsOrgConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig">FederatedSettingsOrgConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig">FederatedSettingsOrgConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetDomainAllowList">resetDomainAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetPostAuthRoleGrants">resetPostAuthRoleGrants</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDomainAllowList` <a name="resetDomainAllowList" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetDomainAllowList"></a>

```typescript
public resetDomainAllowList(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPostAuthRoleGrants` <a name="resetPostAuthRoleGrants" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetPostAuthRoleGrants"></a>

```typescript
public resetPostAuthRoleGrants(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FederatedSettingsOrgConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isConstruct"></a>

```typescript
import { federatedSettingsOrgConfig } from '@cdktf/provider-mongodbatlas'

federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformElement"></a>

```typescript
import { federatedSettingsOrgConfig } from '@cdktf/provider-mongodbatlas'

federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformResource"></a>

```typescript
import { federatedSettingsOrgConfig } from '@cdktf/provider-mongodbatlas'

federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generateConfigForImport"></a>

```typescript
import { federatedSettingsOrgConfig } from '@cdktf/provider-mongodbatlas'

federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FederatedSettingsOrgConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FederatedSettingsOrgConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FederatedSettingsOrgConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FederatedSettingsOrgConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainAllowListInput">domainAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainRestrictionEnabledInput">domainRestrictionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.federationSettingsIdInput">federationSettingsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.postAuthRoleGrantsInput">postAuthRoleGrantsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainAllowList">domainAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainRestrictionEnabled">domainRestrictionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.federationSettingsId">federationSettingsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.identityProviderId">identityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.postAuthRoleGrants">postAuthRoleGrants</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainAllowListInput`<sup>Optional</sup> <a name="domainAllowListInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainAllowListInput"></a>

```typescript
public readonly domainAllowListInput: string[];
```

- *Type:* string[]

---

##### `domainRestrictionEnabledInput`<sup>Optional</sup> <a name="domainRestrictionEnabledInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainRestrictionEnabledInput"></a>

```typescript
public readonly domainRestrictionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `federationSettingsIdInput`<sup>Optional</sup> <a name="federationSettingsIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.federationSettingsIdInput"></a>

```typescript
public readonly federationSettingsIdInput: string;
```

- *Type:* string

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.identityProviderIdInput"></a>

```typescript
public readonly identityProviderIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `postAuthRoleGrantsInput`<sup>Optional</sup> <a name="postAuthRoleGrantsInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.postAuthRoleGrantsInput"></a>

```typescript
public readonly postAuthRoleGrantsInput: string[];
```

- *Type:* string[]

---

##### `domainAllowList`<sup>Required</sup> <a name="domainAllowList" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainAllowList"></a>

```typescript
public readonly domainAllowList: string[];
```

- *Type:* string[]

---

##### `domainRestrictionEnabled`<sup>Required</sup> <a name="domainRestrictionEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainRestrictionEnabled"></a>

```typescript
public readonly domainRestrictionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.federationSettingsId"></a>

```typescript
public readonly federationSettingsId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.identityProviderId"></a>

```typescript
public readonly identityProviderId: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `postAuthRoleGrants`<sup>Required</sup> <a name="postAuthRoleGrants" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.postAuthRoleGrants"></a>

```typescript
public readonly postAuthRoleGrants: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedSettingsOrgConfigConfig <a name="FederatedSettingsOrgConfigConfig" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.Initializer"></a>

```typescript
import { federatedSettingsOrgConfig } from '@cdktf/provider-mongodbatlas'

const federatedSettingsOrgConfigConfig: federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.domainRestrictionEnabled">domainRestrictionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#domain_restriction_enabled FederatedSettingsOrgConfig#domain_restriction_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.federationSettingsId">federationSettingsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#federation_settings_id FederatedSettingsOrgConfig#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.identityProviderId">identityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#identity_provider_id FederatedSettingsOrgConfig#identity_provider_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.orgId">orgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#org_id FederatedSettingsOrgConfig#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.domainAllowList">domainAllowList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#domain_allow_list FederatedSettingsOrgConfig#domain_allow_list}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#id FederatedSettingsOrgConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.postAuthRoleGrants">postAuthRoleGrants</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#post_auth_role_grants FederatedSettingsOrgConfig#post_auth_role_grants}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainRestrictionEnabled`<sup>Required</sup> <a name="domainRestrictionEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.domainRestrictionEnabled"></a>

```typescript
public readonly domainRestrictionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#domain_restriction_enabled FederatedSettingsOrgConfig#domain_restriction_enabled}.

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.federationSettingsId"></a>

```typescript
public readonly federationSettingsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#federation_settings_id FederatedSettingsOrgConfig#federation_settings_id}.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.identityProviderId"></a>

```typescript
public readonly identityProviderId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#identity_provider_id FederatedSettingsOrgConfig#identity_provider_id}.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#org_id FederatedSettingsOrgConfig#org_id}.

---

##### `domainAllowList`<sup>Optional</sup> <a name="domainAllowList" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.domainAllowList"></a>

```typescript
public readonly domainAllowList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#domain_allow_list FederatedSettingsOrgConfig#domain_allow_list}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#id FederatedSettingsOrgConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postAuthRoleGrants`<sup>Optional</sup> <a name="postAuthRoleGrants" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.postAuthRoleGrants"></a>

```typescript
public readonly postAuthRoleGrants: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/federated_settings_org_config#post_auth_role_grants FederatedSettingsOrgConfig#post_auth_role_grants}.

---



