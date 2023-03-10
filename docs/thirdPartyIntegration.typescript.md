# `thirdPartyIntegration` Submodule <a name="`thirdPartyIntegration` Submodule" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ThirdPartyIntegration <a name="ThirdPartyIntegration" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration mongodbatlas_third_party_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer"></a>

```typescript
import { thirdPartyIntegration } from '@cdktf/provider-mongodbatlas'

new thirdPartyIntegration.ThirdPartyIntegration(scope: Construct, id: string, config: ThirdPartyIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig">ThirdPartyIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig">ThirdPartyIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetApiToken">resetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetChannelName">resetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetFlowName">resetFlowName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetLicenseKey">resetLicenseKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetMicrosoftTeamsWebhookUrl">resetMicrosoftTeamsWebhookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetOrgName">resetOrgName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetReadToken">resetReadToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRoutingKey">resetRoutingKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetScheme">resetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceDiscovery">resetServiceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceKey">resetServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetTeamName">resetTeamName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUserName">resetUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetWriteToken">resetWriteToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetApiKey` <a name="resetApiKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetApiToken` <a name="resetApiToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetApiToken"></a>

```typescript
public resetApiToken(): void
```

##### `resetChannelName` <a name="resetChannelName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetChannelName"></a>

```typescript
public resetChannelName(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFlowName` <a name="resetFlowName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetFlowName"></a>

```typescript
public resetFlowName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicenseKey` <a name="resetLicenseKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetLicenseKey"></a>

```typescript
public resetLicenseKey(): void
```

##### `resetMicrosoftTeamsWebhookUrl` <a name="resetMicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetMicrosoftTeamsWebhookUrl"></a>

```typescript
public resetMicrosoftTeamsWebhookUrl(): void
```

##### `resetOrgName` <a name="resetOrgName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetOrgName"></a>

```typescript
public resetOrgName(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetReadToken` <a name="resetReadToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetReadToken"></a>

```typescript
public resetReadToken(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoutingKey` <a name="resetRoutingKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRoutingKey"></a>

```typescript
public resetRoutingKey(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetScheme"></a>

```typescript
public resetScheme(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetServiceDiscovery` <a name="resetServiceDiscovery" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceDiscovery"></a>

```typescript
public resetServiceDiscovery(): void
```

##### `resetServiceKey` <a name="resetServiceKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceKey"></a>

```typescript
public resetServiceKey(): void
```

##### `resetTeamName` <a name="resetTeamName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetTeamName"></a>

```typescript
public resetTeamName(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUserName"></a>

```typescript
public resetUserName(): void
```

##### `resetWriteToken` <a name="resetWriteToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetWriteToken"></a>

```typescript
public resetWriteToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isConstruct"></a>

```typescript
import { thirdPartyIntegration } from '@cdktf/provider-mongodbatlas'

thirdPartyIntegration.ThirdPartyIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformElement"></a>

```typescript
import { thirdPartyIntegration } from '@cdktf/provider-mongodbatlas'

thirdPartyIntegration.ThirdPartyIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformResource"></a>

```typescript
import { thirdPartyIntegration } from '@cdktf/provider-mongodbatlas'

thirdPartyIntegration.ThirdPartyIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiTokenInput">apiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.flowNameInput">flowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.licenseKeyInput">licenseKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrlInput">microsoftTeamsWebhookUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.orgNameInput">orgNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.readTokenInput">readTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKeyInput">routingKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscoveryInput">serviceDiscoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKeyInput">serviceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamNameInput">teamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.writeTokenInput">writeTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.flowName">flowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.licenseKey">licenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrl">microsoftTeamsWebhookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.orgName">orgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.readToken">readToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKey">routingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscovery">serviceDiscovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKey">serviceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamName">teamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.writeToken">writeToken</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiTokenInput"></a>

```typescript
public readonly apiTokenInput: string;
```

- *Type:* string

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flowNameInput`<sup>Optional</sup> <a name="flowNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.flowNameInput"></a>

```typescript
public readonly flowNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseKeyInput`<sup>Optional</sup> <a name="licenseKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.licenseKeyInput"></a>

```typescript
public readonly licenseKeyInput: string;
```

- *Type:* string

---

##### `microsoftTeamsWebhookUrlInput`<sup>Optional</sup> <a name="microsoftTeamsWebhookUrlInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrlInput"></a>

```typescript
public readonly microsoftTeamsWebhookUrlInput: string;
```

- *Type:* string

---

##### `orgNameInput`<sup>Optional</sup> <a name="orgNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.orgNameInput"></a>

```typescript
public readonly orgNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `readTokenInput`<sup>Optional</sup> <a name="readTokenInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.readTokenInput"></a>

```typescript
public readonly readTokenInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routingKeyInput`<sup>Optional</sup> <a name="routingKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKeyInput"></a>

```typescript
public readonly routingKeyInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `serviceDiscoveryInput`<sup>Optional</sup> <a name="serviceDiscoveryInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscoveryInput"></a>

```typescript
public readonly serviceDiscoveryInput: string;
```

- *Type:* string

---

##### `serviceKeyInput`<sup>Optional</sup> <a name="serviceKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKeyInput"></a>

```typescript
public readonly serviceKeyInput: string;
```

- *Type:* string

---

##### `teamNameInput`<sup>Optional</sup> <a name="teamNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamNameInput"></a>

```typescript
public readonly teamNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `writeTokenInput`<sup>Optional</sup> <a name="writeTokenInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.writeTokenInput"></a>

```typescript
public readonly writeTokenInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseKey`<sup>Required</sup> <a name="licenseKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.licenseKey"></a>

```typescript
public readonly licenseKey: string;
```

- *Type:* string

---

##### `microsoftTeamsWebhookUrl`<sup>Required</sup> <a name="microsoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrl"></a>

```typescript
public readonly microsoftTeamsWebhookUrl: string;
```

- *Type:* string

---

##### `orgName`<sup>Required</sup> <a name="orgName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.orgName"></a>

```typescript
public readonly orgName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `readToken`<sup>Required</sup> <a name="readToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.readToken"></a>

```typescript
public readonly readToken: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routingKey`<sup>Required</sup> <a name="routingKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKey"></a>

```typescript
public readonly routingKey: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `serviceDiscovery`<sup>Required</sup> <a name="serviceDiscovery" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscovery"></a>

```typescript
public readonly serviceDiscovery: string;
```

- *Type:* string

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamName"></a>

```typescript
public readonly teamName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `writeToken`<sup>Required</sup> <a name="writeToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.writeToken"></a>

```typescript
public readonly writeToken: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ThirdPartyIntegrationConfig <a name="ThirdPartyIntegrationConfig" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.Initializer"></a>

```typescript
import { thirdPartyIntegration } from '@cdktf/provider-mongodbatlas'

const thirdPartyIntegrationConfig: thirdPartyIntegration.ThirdPartyIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#project_id ThirdPartyIntegration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#type ThirdPartyIntegration#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#account_id ThirdPartyIntegration#account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.apiKey">apiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#api_key ThirdPartyIntegration#api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.apiToken">apiToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#api_token ThirdPartyIntegration#api_token}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.channelName">channelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#channel_name ThirdPartyIntegration#channel_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#enabled ThirdPartyIntegration#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.flowName">flowName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#flow_name ThirdPartyIntegration#flow_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#id ThirdPartyIntegration#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.licenseKey">licenseKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#license_key ThirdPartyIntegration#license_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.microsoftTeamsWebhookUrl">microsoftTeamsWebhookUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#microsoft_teams_webhook_url ThirdPartyIntegration#microsoft_teams_webhook_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.orgName">orgName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#org_name ThirdPartyIntegration#org_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#password ThirdPartyIntegration#password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.readToken">readToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#read_token ThirdPartyIntegration#read_token}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#region ThirdPartyIntegration#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.routingKey">routingKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#routing_key ThirdPartyIntegration#routing_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#scheme ThirdPartyIntegration#scheme}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.secret">secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#secret ThirdPartyIntegration#secret}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceDiscovery">serviceDiscovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#service_discovery ThirdPartyIntegration#service_discovery}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceKey">serviceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#service_key ThirdPartyIntegration#service_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.teamName">teamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#team_name ThirdPartyIntegration#team_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#url ThirdPartyIntegration#url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#user_name ThirdPartyIntegration#user_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.writeToken">writeToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#write_token ThirdPartyIntegration#write_token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#project_id ThirdPartyIntegration#project_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#type ThirdPartyIntegration#type}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#account_id ThirdPartyIntegration#account_id}.

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#api_key ThirdPartyIntegration#api_key}.

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#api_token ThirdPartyIntegration#api_token}.

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#channel_name ThirdPartyIntegration#channel_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#enabled ThirdPartyIntegration#enabled}.

---

##### `flowName`<sup>Optional</sup> <a name="flowName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#flow_name ThirdPartyIntegration#flow_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#id ThirdPartyIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseKey`<sup>Optional</sup> <a name="licenseKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.licenseKey"></a>

```typescript
public readonly licenseKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#license_key ThirdPartyIntegration#license_key}.

---

##### `microsoftTeamsWebhookUrl`<sup>Optional</sup> <a name="microsoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.microsoftTeamsWebhookUrl"></a>

```typescript
public readonly microsoftTeamsWebhookUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#microsoft_teams_webhook_url ThirdPartyIntegration#microsoft_teams_webhook_url}.

---

##### `orgName`<sup>Optional</sup> <a name="orgName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.orgName"></a>

```typescript
public readonly orgName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#org_name ThirdPartyIntegration#org_name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#password ThirdPartyIntegration#password}.

---

##### `readToken`<sup>Optional</sup> <a name="readToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.readToken"></a>

```typescript
public readonly readToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#read_token ThirdPartyIntegration#read_token}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#region ThirdPartyIntegration#region}.

---

##### `routingKey`<sup>Optional</sup> <a name="routingKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.routingKey"></a>

```typescript
public readonly routingKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#routing_key ThirdPartyIntegration#routing_key}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#scheme ThirdPartyIntegration#scheme}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#secret ThirdPartyIntegration#secret}.

---

##### `serviceDiscovery`<sup>Optional</sup> <a name="serviceDiscovery" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceDiscovery"></a>

```typescript
public readonly serviceDiscovery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#service_discovery ThirdPartyIntegration#service_discovery}.

---

##### `serviceKey`<sup>Optional</sup> <a name="serviceKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#service_key ThirdPartyIntegration#service_key}.

---

##### `teamName`<sup>Optional</sup> <a name="teamName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.teamName"></a>

```typescript
public readonly teamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#team_name ThirdPartyIntegration#team_name}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#url ThirdPartyIntegration#url}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#user_name ThirdPartyIntegration#user_name}.

---

##### `writeToken`<sup>Optional</sup> <a name="writeToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.writeToken"></a>

```typescript
public readonly writeToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#write_token ThirdPartyIntegration#write_token}.

---



