# `organization` Submodule <a name="`organization` Submodule" id="@cdktf/provider-mongodbatlas.organization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Organization <a name="Organization" id="@cdktf/provider-mongodbatlas.organization.Organization"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization mongodbatlas_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer"></a>

```typescript
import { organization } from '@cdktf/provider-mongodbatlas'

new organization.Organization(scope: Construct, id: string, config: OrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig">OrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig">OrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetApiAccessListRequired">resetApiAccessListRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetFederationSettingsId">resetFederationSettingsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetGenAiFeaturesEnabled">resetGenAiFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetMultiFactorAuthRequired">resetMultiFactorAuthRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetOrgOwnerId">resetOrgOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetRestrictEmployeeAccess">resetRestrictEmployeeAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetRoleNames">resetRoleNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetSecurityContact">resetSecurityContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetSkipDefaultAlertsSettings">resetSkipDefaultAlertsSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.organization.Organization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.organization.Organization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.organization.Organization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.organization.Organization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.organization.Organization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.organization.Organization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.organization.Organization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.organization.Organization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.organization.Organization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.organization.Organization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.organization.Organization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.organization.Organization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.organization.Organization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.organization.Organization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.Organization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.organization.Organization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.organization.Organization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.organization.Organization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.organization.Organization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.organization.Organization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetApiAccessListRequired` <a name="resetApiAccessListRequired" id="@cdktf/provider-mongodbatlas.organization.Organization.resetApiAccessListRequired"></a>

```typescript
public resetApiAccessListRequired(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-mongodbatlas.organization.Organization.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFederationSettingsId` <a name="resetFederationSettingsId" id="@cdktf/provider-mongodbatlas.organization.Organization.resetFederationSettingsId"></a>

```typescript
public resetFederationSettingsId(): void
```

##### `resetGenAiFeaturesEnabled` <a name="resetGenAiFeaturesEnabled" id="@cdktf/provider-mongodbatlas.organization.Organization.resetGenAiFeaturesEnabled"></a>

```typescript
public resetGenAiFeaturesEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.organization.Organization.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMultiFactorAuthRequired` <a name="resetMultiFactorAuthRequired" id="@cdktf/provider-mongodbatlas.organization.Organization.resetMultiFactorAuthRequired"></a>

```typescript
public resetMultiFactorAuthRequired(): void
```

##### `resetOrgOwnerId` <a name="resetOrgOwnerId" id="@cdktf/provider-mongodbatlas.organization.Organization.resetOrgOwnerId"></a>

```typescript
public resetOrgOwnerId(): void
```

##### `resetRestrictEmployeeAccess` <a name="resetRestrictEmployeeAccess" id="@cdktf/provider-mongodbatlas.organization.Organization.resetRestrictEmployeeAccess"></a>

```typescript
public resetRestrictEmployeeAccess(): void
```

##### `resetRoleNames` <a name="resetRoleNames" id="@cdktf/provider-mongodbatlas.organization.Organization.resetRoleNames"></a>

```typescript
public resetRoleNames(): void
```

##### `resetSecurityContact` <a name="resetSecurityContact" id="@cdktf/provider-mongodbatlas.organization.Organization.resetSecurityContact"></a>

```typescript
public resetSecurityContact(): void
```

##### `resetSkipDefaultAlertsSettings` <a name="resetSkipDefaultAlertsSettings" id="@cdktf/provider-mongodbatlas.organization.Organization.resetSkipDefaultAlertsSettings"></a>

```typescript
public resetSkipDefaultAlertsSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.organization.Organization.isConstruct"></a>

```typescript
import { organization } from '@cdktf/provider-mongodbatlas'

organization.Organization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.organization.Organization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.organization.Organization.isTerraformElement"></a>

```typescript
import { organization } from '@cdktf/provider-mongodbatlas'

organization.Organization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.organization.Organization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.organization.Organization.isTerraformResource"></a>

```typescript
import { organization } from '@cdktf/provider-mongodbatlas'

organization.Organization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.organization.Organization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport"></a>

```typescript
import { organization } from '@cdktf/provider-mongodbatlas'

organization.Organization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Organization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Organization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Organization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.apiAccessListRequiredInput">apiAccessListRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.federationSettingsIdInput">federationSettingsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.genAiFeaturesEnabledInput">genAiFeaturesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.multiFactorAuthRequiredInput">multiFactorAuthRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.orgOwnerIdInput">orgOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.restrictEmployeeAccessInput">restrictEmployeeAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.roleNamesInput">roleNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.securityContactInput">securityContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.skipDefaultAlertsSettingsInput">skipDefaultAlertsSettingsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.apiAccessListRequired">apiAccessListRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.federationSettingsId">federationSettingsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.genAiFeaturesEnabled">genAiFeaturesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.multiFactorAuthRequired">multiFactorAuthRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.orgOwnerId">orgOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.restrictEmployeeAccess">restrictEmployeeAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.roleNames">roleNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.securityContact">securityContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.skipDefaultAlertsSettings">skipDefaultAlertsSettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.organization.Organization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.organization.Organization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.organization.Organization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.organization.Organization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.organization.Organization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.organization.Organization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.organization.Organization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.organization.Organization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.organization.Organization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.organization.Organization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.organization.Organization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.organization.Organization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.Organization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.organization.Organization.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.organization.Organization.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-mongodbatlas.organization.Organization.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-mongodbatlas.organization.Organization.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `apiAccessListRequiredInput`<sup>Optional</sup> <a name="apiAccessListRequiredInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.apiAccessListRequiredInput"></a>

```typescript
public readonly apiAccessListRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `federationSettingsIdInput`<sup>Optional</sup> <a name="federationSettingsIdInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.federationSettingsIdInput"></a>

```typescript
public readonly federationSettingsIdInput: string;
```

- *Type:* string

---

##### `genAiFeaturesEnabledInput`<sup>Optional</sup> <a name="genAiFeaturesEnabledInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.genAiFeaturesEnabledInput"></a>

```typescript
public readonly genAiFeaturesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `multiFactorAuthRequiredInput`<sup>Optional</sup> <a name="multiFactorAuthRequiredInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.multiFactorAuthRequiredInput"></a>

```typescript
public readonly multiFactorAuthRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgOwnerIdInput`<sup>Optional</sup> <a name="orgOwnerIdInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.orgOwnerIdInput"></a>

```typescript
public readonly orgOwnerIdInput: string;
```

- *Type:* string

---

##### `restrictEmployeeAccessInput`<sup>Optional</sup> <a name="restrictEmployeeAccessInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.restrictEmployeeAccessInput"></a>

```typescript
public readonly restrictEmployeeAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleNamesInput`<sup>Optional</sup> <a name="roleNamesInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.roleNamesInput"></a>

```typescript
public readonly roleNamesInput: string[];
```

- *Type:* string[]

---

##### `securityContactInput`<sup>Optional</sup> <a name="securityContactInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.securityContactInput"></a>

```typescript
public readonly securityContactInput: string;
```

- *Type:* string

---

##### `skipDefaultAlertsSettingsInput`<sup>Optional</sup> <a name="skipDefaultAlertsSettingsInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.skipDefaultAlertsSettingsInput"></a>

```typescript
public readonly skipDefaultAlertsSettingsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiAccessListRequired`<sup>Required</sup> <a name="apiAccessListRequired" id="@cdktf/provider-mongodbatlas.organization.Organization.property.apiAccessListRequired"></a>

```typescript
public readonly apiAccessListRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.organization.Organization.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.organization.Organization.property.federationSettingsId"></a>

```typescript
public readonly federationSettingsId: string;
```

- *Type:* string

---

##### `genAiFeaturesEnabled`<sup>Required</sup> <a name="genAiFeaturesEnabled" id="@cdktf/provider-mongodbatlas.organization.Organization.property.genAiFeaturesEnabled"></a>

```typescript
public readonly genAiFeaturesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multiFactorAuthRequired`<sup>Required</sup> <a name="multiFactorAuthRequired" id="@cdktf/provider-mongodbatlas.organization.Organization.property.multiFactorAuthRequired"></a>

```typescript
public readonly multiFactorAuthRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.organization.Organization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgOwnerId`<sup>Required</sup> <a name="orgOwnerId" id="@cdktf/provider-mongodbatlas.organization.Organization.property.orgOwnerId"></a>

```typescript
public readonly orgOwnerId: string;
```

- *Type:* string

---

##### `restrictEmployeeAccess`<sup>Required</sup> <a name="restrictEmployeeAccess" id="@cdktf/provider-mongodbatlas.organization.Organization.property.restrictEmployeeAccess"></a>

```typescript
public readonly restrictEmployeeAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleNames`<sup>Required</sup> <a name="roleNames" id="@cdktf/provider-mongodbatlas.organization.Organization.property.roleNames"></a>

```typescript
public readonly roleNames: string[];
```

- *Type:* string[]

---

##### `securityContact`<sup>Required</sup> <a name="securityContact" id="@cdktf/provider-mongodbatlas.organization.Organization.property.securityContact"></a>

```typescript
public readonly securityContact: string;
```

- *Type:* string

---

##### `skipDefaultAlertsSettings`<sup>Required</sup> <a name="skipDefaultAlertsSettings" id="@cdktf/provider-mongodbatlas.organization.Organization.property.skipDefaultAlertsSettings"></a>

```typescript
public readonly skipDefaultAlertsSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.organization.Organization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationConfig <a name="OrganizationConfig" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.Initializer"></a>

```typescript
import { organization } from '@cdktf/provider-mongodbatlas'

const organizationConfig: organization.OrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#name Organization#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.apiAccessListRequired">apiAccessListRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#api_access_list_required Organization#api_access_list_required}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#description Organization#description}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.federationSettingsId">federationSettingsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#federation_settings_id Organization#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.genAiFeaturesEnabled">genAiFeaturesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#gen_ai_features_enabled Organization#gen_ai_features_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#id Organization#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.multiFactorAuthRequired">multiFactorAuthRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#multi_factor_auth_required Organization#multi_factor_auth_required}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.orgOwnerId">orgOwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#org_owner_id Organization#org_owner_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.restrictEmployeeAccess">restrictEmployeeAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#restrict_employee_access Organization#restrict_employee_access}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.roleNames">roleNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#role_names Organization#role_names}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.securityContact">securityContact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#security_contact Organization#security_contact}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.skipDefaultAlertsSettings">skipDefaultAlertsSettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#skip_default_alerts_settings Organization#skip_default_alerts_settings}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#name Organization#name}.

---

##### `apiAccessListRequired`<sup>Optional</sup> <a name="apiAccessListRequired" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.apiAccessListRequired"></a>

```typescript
public readonly apiAccessListRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#api_access_list_required Organization#api_access_list_required}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#description Organization#description}.

---

##### `federationSettingsId`<sup>Optional</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.federationSettingsId"></a>

```typescript
public readonly federationSettingsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#federation_settings_id Organization#federation_settings_id}.

---

##### `genAiFeaturesEnabled`<sup>Optional</sup> <a name="genAiFeaturesEnabled" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.genAiFeaturesEnabled"></a>

```typescript
public readonly genAiFeaturesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#gen_ai_features_enabled Organization#gen_ai_features_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#id Organization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiFactorAuthRequired`<sup>Optional</sup> <a name="multiFactorAuthRequired" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.multiFactorAuthRequired"></a>

```typescript
public readonly multiFactorAuthRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#multi_factor_auth_required Organization#multi_factor_auth_required}.

---

##### `orgOwnerId`<sup>Optional</sup> <a name="orgOwnerId" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.orgOwnerId"></a>

```typescript
public readonly orgOwnerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#org_owner_id Organization#org_owner_id}.

---

##### `restrictEmployeeAccess`<sup>Optional</sup> <a name="restrictEmployeeAccess" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.restrictEmployeeAccess"></a>

```typescript
public readonly restrictEmployeeAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#restrict_employee_access Organization#restrict_employee_access}.

---

##### `roleNames`<sup>Optional</sup> <a name="roleNames" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.roleNames"></a>

```typescript
public readonly roleNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#role_names Organization#role_names}.

---

##### `securityContact`<sup>Optional</sup> <a name="securityContact" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.securityContact"></a>

```typescript
public readonly securityContact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#security_contact Organization#security_contact}.

---

##### `skipDefaultAlertsSettings`<sup>Optional</sup> <a name="skipDefaultAlertsSettings" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.skipDefaultAlertsSettings"></a>

```typescript
public readonly skipDefaultAlertsSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/organization#skip_default_alerts_settings Organization#skip_default_alerts_settings}.

---



