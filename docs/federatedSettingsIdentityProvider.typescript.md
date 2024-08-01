# `federatedSettingsIdentityProvider` Submodule <a name="`federatedSettingsIdentityProvider` Submodule" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedSettingsIdentityProvider <a name="FederatedSettingsIdentityProvider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider mongodbatlas_federated_settings_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer"></a>

```typescript
import { federatedSettingsIdentityProvider } from '@cdktf/provider-mongodbatlas'

new federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider(scope: Construct, id: string, config: FederatedSettingsIdentityProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig">FederatedSettingsIdentityProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig">FederatedSettingsIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAssociatedDomains">resetAssociatedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetGroupsClaim">resetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetIdpType">resetIdpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetRequestBinding">resetRequestBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetRequestedScopes">resetRequestedScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetResponseSignatureAlgorithm">resetResponseSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetSsoDebugEnabled">resetSsoDebugEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetSsoUrl">resetSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetUserClaim">resetUserClaim</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAssociatedDomains` <a name="resetAssociatedDomains" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAssociatedDomains"></a>

```typescript
public resetAssociatedDomains(): void
```

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAuthorizationType"></a>

```typescript
public resetAuthorizationType(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGroupsClaim` <a name="resetGroupsClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetGroupsClaim"></a>

```typescript
public resetGroupsClaim(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdpType` <a name="resetIdpType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetIdpType"></a>

```typescript
public resetIdpType(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRequestBinding` <a name="resetRequestBinding" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetRequestBinding"></a>

```typescript
public resetRequestBinding(): void
```

##### `resetRequestedScopes` <a name="resetRequestedScopes" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetRequestedScopes"></a>

```typescript
public resetRequestedScopes(): void
```

##### `resetResponseSignatureAlgorithm` <a name="resetResponseSignatureAlgorithm" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetResponseSignatureAlgorithm"></a>

```typescript
public resetResponseSignatureAlgorithm(): void
```

##### `resetSsoDebugEnabled` <a name="resetSsoDebugEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetSsoDebugEnabled"></a>

```typescript
public resetSsoDebugEnabled(): void
```

##### `resetSsoUrl` <a name="resetSsoUrl" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetSsoUrl"></a>

```typescript
public resetSsoUrl(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUserClaim` <a name="resetUserClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetUserClaim"></a>

```typescript
public resetUserClaim(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FederatedSettingsIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isConstruct"></a>

```typescript
import { federatedSettingsIdentityProvider } from '@cdktf/provider-mongodbatlas'

federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformElement"></a>

```typescript
import { federatedSettingsIdentityProvider } from '@cdktf/provider-mongodbatlas'

federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformResource"></a>

```typescript
import { federatedSettingsIdentityProvider } from '@cdktf/provider-mongodbatlas'

federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport"></a>

```typescript
import { federatedSettingsIdentityProvider } from '@cdktf/provider-mongodbatlas'

federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FederatedSettingsIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FederatedSettingsIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FederatedSettingsIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FederatedSettingsIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpId">idpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.oktaIdpId">oktaIdpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.associatedDomainsInput">associatedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.federationSettingsIdInput">federationSettingsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.groupsClaimInput">groupsClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpTypeInput">idpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.issuerUriInput">issuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestBindingInput">requestBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestedScopesInput">requestedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.responseSignatureAlgorithmInput">responseSignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoDebugEnabledInput">ssoDebugEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoUrlInput">ssoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.userClaimInput">userClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.associatedDomains">associatedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.authorizationType">authorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.federationSettingsId">federationSettingsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.groupsClaim">groupsClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpType">idpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestBinding">requestBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestedScopes">requestedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.responseSignatureAlgorithm">responseSignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoDebugEnabled">ssoDebugEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoUrl">ssoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.userClaim">userClaim</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idpId`<sup>Required</sup> <a name="idpId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpId"></a>

```typescript
public readonly idpId: string;
```

- *Type:* string

---

##### `oktaIdpId`<sup>Required</sup> <a name="oktaIdpId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.oktaIdpId"></a>

```typescript
public readonly oktaIdpId: string;
```

- *Type:* string

---

##### `associatedDomainsInput`<sup>Optional</sup> <a name="associatedDomainsInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.associatedDomainsInput"></a>

```typescript
public readonly associatedDomainsInput: string[];
```

- *Type:* string[]

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.authorizationTypeInput"></a>

```typescript
public readonly authorizationTypeInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `federationSettingsIdInput`<sup>Optional</sup> <a name="federationSettingsIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.federationSettingsIdInput"></a>

```typescript
public readonly federationSettingsIdInput: string;
```

- *Type:* string

---

##### `groupsClaimInput`<sup>Optional</sup> <a name="groupsClaimInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.groupsClaimInput"></a>

```typescript
public readonly groupsClaimInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpTypeInput`<sup>Optional</sup> <a name="idpTypeInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpTypeInput"></a>

```typescript
public readonly idpTypeInput: string;
```

- *Type:* string

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.issuerUriInput"></a>

```typescript
public readonly issuerUriInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `requestBindingInput`<sup>Optional</sup> <a name="requestBindingInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestBindingInput"></a>

```typescript
public readonly requestBindingInput: string;
```

- *Type:* string

---

##### `requestedScopesInput`<sup>Optional</sup> <a name="requestedScopesInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestedScopesInput"></a>

```typescript
public readonly requestedScopesInput: string[];
```

- *Type:* string[]

---

##### `responseSignatureAlgorithmInput`<sup>Optional</sup> <a name="responseSignatureAlgorithmInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.responseSignatureAlgorithmInput"></a>

```typescript
public readonly responseSignatureAlgorithmInput: string;
```

- *Type:* string

---

##### `ssoDebugEnabledInput`<sup>Optional</sup> <a name="ssoDebugEnabledInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoDebugEnabledInput"></a>

```typescript
public readonly ssoDebugEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ssoUrlInput`<sup>Optional</sup> <a name="ssoUrlInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoUrlInput"></a>

```typescript
public readonly ssoUrlInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `userClaimInput`<sup>Optional</sup> <a name="userClaimInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.userClaimInput"></a>

```typescript
public readonly userClaimInput: string;
```

- *Type:* string

---

##### `associatedDomains`<sup>Required</sup> <a name="associatedDomains" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.associatedDomains"></a>

```typescript
public readonly associatedDomains: string[];
```

- *Type:* string[]

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.federationSettingsId"></a>

```typescript
public readonly federationSettingsId: string;
```

- *Type:* string

---

##### `groupsClaim`<sup>Required</sup> <a name="groupsClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idpType`<sup>Required</sup> <a name="idpType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpType"></a>

```typescript
public readonly idpType: string;
```

- *Type:* string

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `requestBinding`<sup>Required</sup> <a name="requestBinding" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestBinding"></a>

```typescript
public readonly requestBinding: string;
```

- *Type:* string

---

##### `requestedScopes`<sup>Required</sup> <a name="requestedScopes" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestedScopes"></a>

```typescript
public readonly requestedScopes: string[];
```

- *Type:* string[]

---

##### `responseSignatureAlgorithm`<sup>Required</sup> <a name="responseSignatureAlgorithm" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.responseSignatureAlgorithm"></a>

```typescript
public readonly responseSignatureAlgorithm: string;
```

- *Type:* string

---

##### `ssoDebugEnabled`<sup>Required</sup> <a name="ssoDebugEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoDebugEnabled"></a>

```typescript
public readonly ssoDebugEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoUrl"></a>

```typescript
public readonly ssoUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `userClaim`<sup>Required</sup> <a name="userClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.userClaim"></a>

```typescript
public readonly userClaim: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedSettingsIdentityProviderConfig <a name="FederatedSettingsIdentityProviderConfig" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.Initializer"></a>

```typescript
import { federatedSettingsIdentityProvider } from '@cdktf/provider-mongodbatlas'

const federatedSettingsIdentityProviderConfig: federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.federationSettingsId">federationSettingsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#federation_settings_id FederatedSettingsIdentityProvider#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.issuerUri">issuerUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#issuer_uri FederatedSettingsIdentityProvider#issuer_uri}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#name FederatedSettingsIdentityProvider#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.associatedDomains">associatedDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#associated_domains FederatedSettingsIdentityProvider#associated_domains}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.audience">audience</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#audience FederatedSettingsIdentityProvider#audience}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.authorizationType">authorizationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#authorization_type FederatedSettingsIdentityProvider#authorization_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#client_id FederatedSettingsIdentityProvider#client_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#description FederatedSettingsIdentityProvider#description}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.groupsClaim">groupsClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#groups_claim FederatedSettingsIdentityProvider#groups_claim}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#id FederatedSettingsIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.idpType">idpType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#idp_type FederatedSettingsIdentityProvider#idp_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#protocol FederatedSettingsIdentityProvider#protocol}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.requestBinding">requestBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#request_binding FederatedSettingsIdentityProvider#request_binding}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.requestedScopes">requestedScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#requested_scopes FederatedSettingsIdentityProvider#requested_scopes}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.responseSignatureAlgorithm">responseSignatureAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#response_signature_algorithm FederatedSettingsIdentityProvider#response_signature_algorithm}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.ssoDebugEnabled">ssoDebugEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#sso_debug_enabled FederatedSettingsIdentityProvider#sso_debug_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.ssoUrl">ssoUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#sso_url FederatedSettingsIdentityProvider#sso_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#status FederatedSettingsIdentityProvider#status}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.userClaim">userClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#user_claim FederatedSettingsIdentityProvider#user_claim}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.federationSettingsId"></a>

```typescript
public readonly federationSettingsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#federation_settings_id FederatedSettingsIdentityProvider#federation_settings_id}.

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#issuer_uri FederatedSettingsIdentityProvider#issuer_uri}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#name FederatedSettingsIdentityProvider#name}.

---

##### `associatedDomains`<sup>Optional</sup> <a name="associatedDomains" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.associatedDomains"></a>

```typescript
public readonly associatedDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#associated_domains FederatedSettingsIdentityProvider#associated_domains}.

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#audience FederatedSettingsIdentityProvider#audience}.

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#authorization_type FederatedSettingsIdentityProvider#authorization_type}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#client_id FederatedSettingsIdentityProvider#client_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#description FederatedSettingsIdentityProvider#description}.

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#groups_claim FederatedSettingsIdentityProvider#groups_claim}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#id FederatedSettingsIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpType`<sup>Optional</sup> <a name="idpType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.idpType"></a>

```typescript
public readonly idpType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#idp_type FederatedSettingsIdentityProvider#idp_type}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#protocol FederatedSettingsIdentityProvider#protocol}.

---

##### `requestBinding`<sup>Optional</sup> <a name="requestBinding" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.requestBinding"></a>

```typescript
public readonly requestBinding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#request_binding FederatedSettingsIdentityProvider#request_binding}.

---

##### `requestedScopes`<sup>Optional</sup> <a name="requestedScopes" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.requestedScopes"></a>

```typescript
public readonly requestedScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#requested_scopes FederatedSettingsIdentityProvider#requested_scopes}.

---

##### `responseSignatureAlgorithm`<sup>Optional</sup> <a name="responseSignatureAlgorithm" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.responseSignatureAlgorithm"></a>

```typescript
public readonly responseSignatureAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#response_signature_algorithm FederatedSettingsIdentityProvider#response_signature_algorithm}.

---

##### `ssoDebugEnabled`<sup>Optional</sup> <a name="ssoDebugEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.ssoDebugEnabled"></a>

```typescript
public readonly ssoDebugEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#sso_debug_enabled FederatedSettingsIdentityProvider#sso_debug_enabled}.

---

##### `ssoUrl`<sup>Optional</sup> <a name="ssoUrl" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.ssoUrl"></a>

```typescript
public readonly ssoUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#sso_url FederatedSettingsIdentityProvider#sso_url}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#status FederatedSettingsIdentityProvider#status}.

---

##### `userClaim`<sup>Optional</sup> <a name="userClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.userClaim"></a>

```typescript
public readonly userClaim: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/federated_settings_identity_provider#user_claim FederatedSettingsIdentityProvider#user_claim}.

---



