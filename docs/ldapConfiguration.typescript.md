# `mongodbatlas_ldap_configuration`

Refer to the Terraform Registory for docs: [`mongodbatlas_ldap_configuration`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration).

# `ldapConfiguration` Submodule <a name="`ldapConfiguration` Submodule" id="@cdktf/provider-mongodbatlas.ldapConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapConfiguration <a name="LdapConfiguration" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration mongodbatlas_ldap_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer"></a>

```typescript
import { ldapConfiguration } from '@cdktf/provider-mongodbatlas'

new ldapConfiguration.LdapConfiguration(scope: Construct, id: string, config: LdapConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig">LdapConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig">LdapConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.putUserToDnMapping">putUserToDnMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthorizationEnabled">resetAuthorizationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthzQueryTemplate">resetAuthzQueryTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetUserToDnMapping">resetUserToDnMapping</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putUserToDnMapping` <a name="putUserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.putUserToDnMapping"></a>

```typescript
public putUserToDnMapping(value: IResolvable | LdapConfigurationUserToDnMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.putUserToDnMapping.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>[]

---

##### `resetAuthorizationEnabled` <a name="resetAuthorizationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthorizationEnabled"></a>

```typescript
public resetAuthorizationEnabled(): void
```

##### `resetAuthzQueryTemplate` <a name="resetAuthzQueryTemplate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthzQueryTemplate"></a>

```typescript
public resetAuthzQueryTemplate(): void
```

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetCaCertificate"></a>

```typescript
public resetCaCertificate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetUserToDnMapping` <a name="resetUserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetUserToDnMapping"></a>

```typescript
public resetUserToDnMapping(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LdapConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isConstruct"></a>

```typescript
import { ldapConfiguration } from '@cdktf/provider-mongodbatlas'

ldapConfiguration.LdapConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformElement"></a>

```typescript
import { ldapConfiguration } from '@cdktf/provider-mongodbatlas'

ldapConfiguration.LdapConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformResource"></a>

```typescript
import { ldapConfiguration } from '@cdktf/provider-mongodbatlas'

ldapConfiguration.LdapConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport"></a>

```typescript
import { ldapConfiguration } from '@cdktf/provider-mongodbatlas'

ldapConfiguration.LdapConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LdapConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LdapConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LdapConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LdapConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMapping">userToDnMapping</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList">LdapConfigurationUserToDnMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabledInput">authenticationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabledInput">authorizationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplateInput">authzQueryTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPasswordInput">bindPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsernameInput">bindUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMappingInput">userToDnMappingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabled">authenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabled">authorizationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplate">authzQueryTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPassword">bindPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsername">bindUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userToDnMapping`<sup>Required</sup> <a name="userToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMapping"></a>

```typescript
public readonly userToDnMapping: LdapConfigurationUserToDnMappingList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList">LdapConfigurationUserToDnMappingList</a>

---

##### `authenticationEnabledInput`<sup>Optional</sup> <a name="authenticationEnabledInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabledInput"></a>

```typescript
public readonly authenticationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorizationEnabledInput`<sup>Optional</sup> <a name="authorizationEnabledInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabledInput"></a>

```typescript
public readonly authorizationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authzQueryTemplateInput`<sup>Optional</sup> <a name="authzQueryTemplateInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplateInput"></a>

```typescript
public readonly authzQueryTemplateInput: string;
```

- *Type:* string

---

##### `bindPasswordInput`<sup>Optional</sup> <a name="bindPasswordInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPasswordInput"></a>

```typescript
public readonly bindPasswordInput: string;
```

- *Type:* string

---

##### `bindUsernameInput`<sup>Optional</sup> <a name="bindUsernameInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsernameInput"></a>

```typescript
public readonly bindUsernameInput: string;
```

- *Type:* string

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `userToDnMappingInput`<sup>Optional</sup> <a name="userToDnMappingInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMappingInput"></a>

```typescript
public readonly userToDnMappingInput: IResolvable | LdapConfigurationUserToDnMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>[]

---

##### `authenticationEnabled`<sup>Required</sup> <a name="authenticationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabled"></a>

```typescript
public readonly authenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorizationEnabled`<sup>Required</sup> <a name="authorizationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabled"></a>

```typescript
public readonly authorizationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authzQueryTemplate`<sup>Required</sup> <a name="authzQueryTemplate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplate"></a>

```typescript
public readonly authzQueryTemplate: string;
```

- *Type:* string

---

##### `bindPassword`<sup>Required</sup> <a name="bindPassword" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPassword"></a>

```typescript
public readonly bindPassword: string;
```

- *Type:* string

---

##### `bindUsername`<sup>Required</sup> <a name="bindUsername" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsername"></a>

```typescript
public readonly bindUsername: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapConfigurationConfig <a name="LdapConfigurationConfig" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.Initializer"></a>

```typescript
import { ldapConfiguration } from '@cdktf/provider-mongodbatlas'

const ldapConfigurationConfig: ldapConfiguration.LdapConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authenticationEnabled">authenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#authentication_enabled LdapConfiguration#authentication_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindPassword">bindPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#bind_password LdapConfiguration#bind_password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindUsername">bindUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#bind_username LdapConfiguration#bind_username}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#hostname LdapConfiguration#hostname}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#project_id LdapConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authorizationEnabled">authorizationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#authorization_enabled LdapConfiguration#authorization_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authzQueryTemplate">authzQueryTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#authz_query_template LdapConfiguration#authz_query_template}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.caCertificate">caCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#ca_certificate LdapConfiguration#ca_certificate}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#id LdapConfiguration#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#port LdapConfiguration#port}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.userToDnMapping">userToDnMapping</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>[]</code> | user_to_dn_mapping block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authenticationEnabled`<sup>Required</sup> <a name="authenticationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authenticationEnabled"></a>

```typescript
public readonly authenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#authentication_enabled LdapConfiguration#authentication_enabled}.

---

##### `bindPassword`<sup>Required</sup> <a name="bindPassword" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindPassword"></a>

```typescript
public readonly bindPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#bind_password LdapConfiguration#bind_password}.

---

##### `bindUsername`<sup>Required</sup> <a name="bindUsername" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindUsername"></a>

```typescript
public readonly bindUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#bind_username LdapConfiguration#bind_username}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#hostname LdapConfiguration#hostname}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#project_id LdapConfiguration#project_id}.

---

##### `authorizationEnabled`<sup>Optional</sup> <a name="authorizationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authorizationEnabled"></a>

```typescript
public readonly authorizationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#authorization_enabled LdapConfiguration#authorization_enabled}.

---

##### `authzQueryTemplate`<sup>Optional</sup> <a name="authzQueryTemplate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authzQueryTemplate"></a>

```typescript
public readonly authzQueryTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#authz_query_template LdapConfiguration#authz_query_template}.

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#ca_certificate LdapConfiguration#ca_certificate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#id LdapConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#port LdapConfiguration#port}.

---

##### `userToDnMapping`<sup>Optional</sup> <a name="userToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.userToDnMapping"></a>

```typescript
public readonly userToDnMapping: IResolvable | LdapConfigurationUserToDnMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>[]

user_to_dn_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#user_to_dn_mapping LdapConfiguration#user_to_dn_mapping}

---

### LdapConfigurationUserToDnMapping <a name="LdapConfigurationUserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.Initializer"></a>

```typescript
import { ldapConfiguration } from '@cdktf/provider-mongodbatlas'

const ldapConfigurationUserToDnMapping: ldapConfiguration.LdapConfigurationUserToDnMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.ldapQuery">ldapQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#ldap_query LdapConfiguration#ldap_query}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.match">match</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#match LdapConfiguration#match}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.substitution">substitution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#substitution LdapConfiguration#substitution}. |

---

##### `ldapQuery`<sup>Optional</sup> <a name="ldapQuery" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.ldapQuery"></a>

```typescript
public readonly ldapQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#ldap_query LdapConfiguration#ldap_query}.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#match LdapConfiguration#match}.

---

##### `substitution`<sup>Optional</sup> <a name="substitution" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.substitution"></a>

```typescript
public readonly substitution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/ldap_configuration#substitution LdapConfiguration#substitution}.

---

## Classes <a name="Classes" id="Classes"></a>

### LdapConfigurationUserToDnMappingList <a name="LdapConfigurationUserToDnMappingList" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer"></a>

```typescript
import { ldapConfiguration } from '@cdktf/provider-mongodbatlas'

new ldapConfiguration.LdapConfigurationUserToDnMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.get"></a>

```typescript
public get(index: number): LdapConfigurationUserToDnMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LdapConfigurationUserToDnMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>[]

---


### LdapConfigurationUserToDnMappingOutputReference <a name="LdapConfigurationUserToDnMappingOutputReference" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer"></a>

```typescript
import { ldapConfiguration } from '@cdktf/provider-mongodbatlas'

new ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetLdapQuery">resetLdapQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetSubstitution">resetSubstitution</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLdapQuery` <a name="resetLdapQuery" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetLdapQuery"></a>

```typescript
public resetLdapQuery(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetSubstitution` <a name="resetSubstitution" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetSubstitution"></a>

```typescript
public resetSubstitution(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQueryInput">ldapQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.matchInput">matchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitutionInput">substitutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQuery">ldapQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitution">substitution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ldapQueryInput`<sup>Optional</sup> <a name="ldapQueryInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQueryInput"></a>

```typescript
public readonly ldapQueryInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: string;
```

- *Type:* string

---

##### `substitutionInput`<sup>Optional</sup> <a name="substitutionInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitutionInput"></a>

```typescript
public readonly substitutionInput: string;
```

- *Type:* string

---

##### `ldapQuery`<sup>Required</sup> <a name="ldapQuery" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQuery"></a>

```typescript
public readonly ldapQuery: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `substitution`<sup>Required</sup> <a name="substitution" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitution"></a>

```typescript
public readonly substitution: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LdapConfigurationUserToDnMapping;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>

---



