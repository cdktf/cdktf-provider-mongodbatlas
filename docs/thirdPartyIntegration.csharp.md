# `thirdPartyIntegration` Submodule <a name="`thirdPartyIntegration` Submodule" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ThirdPartyIntegration <a name="ThirdPartyIntegration" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration mongodbatlas_third_party_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ThirdPartyIntegration(Construct Scope, string Id, ThirdPartyIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig">ThirdPartyIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig">ThirdPartyIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetChannelName">ResetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetFlowName">ResetFlowName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetLicenseKey">ResetLicenseKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetMicrosoftTeamsWebhookUrl">ResetMicrosoftTeamsWebhookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetOrgName">ResetOrgName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetReadToken">ResetReadToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRoutingKey">ResetRoutingKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetScheme">ResetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceDiscovery">ResetServiceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceKey">ResetServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetTeamName">ResetTeamName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUserName">ResetUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetWriteToken">ResetWriteToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetApiToken"></a>

```csharp
private void ResetApiToken()
```

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetChannelName"></a>

```csharp
private void ResetChannelName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFlowName` <a name="ResetFlowName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetFlowName"></a>

```csharp
private void ResetFlowName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLicenseKey` <a name="ResetLicenseKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetLicenseKey"></a>

```csharp
private void ResetLicenseKey()
```

##### `ResetMicrosoftTeamsWebhookUrl` <a name="ResetMicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetMicrosoftTeamsWebhookUrl"></a>

```csharp
private void ResetMicrosoftTeamsWebhookUrl()
```

##### `ResetOrgName` <a name="ResetOrgName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetOrgName"></a>

```csharp
private void ResetOrgName()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetReadToken` <a name="ResetReadToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetReadToken"></a>

```csharp
private void ResetReadToken()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoutingKey` <a name="ResetRoutingKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRoutingKey"></a>

```csharp
private void ResetRoutingKey()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetScheme"></a>

```csharp
private void ResetScheme()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetServiceDiscovery` <a name="ResetServiceDiscovery" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceDiscovery"></a>

```csharp
private void ResetServiceDiscovery()
```

##### `ResetServiceKey` <a name="ResetServiceKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceKey"></a>

```csharp
private void ResetServiceKey()
```

##### `ResetTeamName` <a name="ResetTeamName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetTeamName"></a>

```csharp
private void ResetTeamName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUserName"></a>

```csharp
private void ResetUserName()
```

##### `ResetWriteToken` <a name="ResetWriteToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetWriteToken"></a>

```csharp
private void ResetWriteToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

ThirdPartyIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

ThirdPartyIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

ThirdPartyIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiTokenInput">ApiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelNameInput">ChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.flowNameInput">FlowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.licenseKeyInput">LicenseKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrlInput">MicrosoftTeamsWebhookUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.orgNameInput">OrgNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.readTokenInput">ReadTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKeyInput">RoutingKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscoveryInput">ServiceDiscoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKeyInput">ServiceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamNameInput">TeamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.writeTokenInput">WriteTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiToken">ApiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.flowName">FlowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.licenseKey">LicenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrl">MicrosoftTeamsWebhookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.orgName">OrgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.readToken">ReadToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKey">RoutingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscovery">ServiceDiscovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKey">ServiceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamName">TeamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.writeToken">WriteToken</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiTokenInput"></a>

```csharp
public string ApiTokenInput { get; }
```

- *Type:* string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelNameInput"></a>

```csharp
public string ChannelNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FlowNameInput`<sup>Optional</sup> <a name="FlowNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.flowNameInput"></a>

```csharp
public string FlowNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseKeyInput`<sup>Optional</sup> <a name="LicenseKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.licenseKeyInput"></a>

```csharp
public string LicenseKeyInput { get; }
```

- *Type:* string

---

##### `MicrosoftTeamsWebhookUrlInput`<sup>Optional</sup> <a name="MicrosoftTeamsWebhookUrlInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrlInput"></a>

```csharp
public string MicrosoftTeamsWebhookUrlInput { get; }
```

- *Type:* string

---

##### `OrgNameInput`<sup>Optional</sup> <a name="OrgNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.orgNameInput"></a>

```csharp
public string OrgNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ReadTokenInput`<sup>Optional</sup> <a name="ReadTokenInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.readTokenInput"></a>

```csharp
public string ReadTokenInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoutingKeyInput`<sup>Optional</sup> <a name="RoutingKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKeyInput"></a>

```csharp
public string RoutingKeyInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `ServiceDiscoveryInput`<sup>Optional</sup> <a name="ServiceDiscoveryInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscoveryInput"></a>

```csharp
public string ServiceDiscoveryInput { get; }
```

- *Type:* string

---

##### `ServiceKeyInput`<sup>Optional</sup> <a name="ServiceKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKeyInput"></a>

```csharp
public string ServiceKeyInput { get; }
```

- *Type:* string

---

##### `TeamNameInput`<sup>Optional</sup> <a name="TeamNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamNameInput"></a>

```csharp
public string TeamNameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `WriteTokenInput`<sup>Optional</sup> <a name="WriteTokenInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.writeTokenInput"></a>

```csharp
public string WriteTokenInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiToken"></a>

```csharp
public string ApiToken { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FlowName`<sup>Required</sup> <a name="FlowName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.flowName"></a>

```csharp
public string FlowName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseKey`<sup>Required</sup> <a name="LicenseKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.licenseKey"></a>

```csharp
public string LicenseKey { get; }
```

- *Type:* string

---

##### `MicrosoftTeamsWebhookUrl`<sup>Required</sup> <a name="MicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrl"></a>

```csharp
public string MicrosoftTeamsWebhookUrl { get; }
```

- *Type:* string

---

##### `OrgName`<sup>Required</sup> <a name="OrgName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.orgName"></a>

```csharp
public string OrgName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ReadToken`<sup>Required</sup> <a name="ReadToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.readToken"></a>

```csharp
public string ReadToken { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoutingKey`<sup>Required</sup> <a name="RoutingKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKey"></a>

```csharp
public string RoutingKey { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `ServiceDiscovery`<sup>Required</sup> <a name="ServiceDiscovery" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscovery"></a>

```csharp
public string ServiceDiscovery { get; }
```

- *Type:* string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKey"></a>

```csharp
public string ServiceKey { get; }
```

- *Type:* string

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamName"></a>

```csharp
public string TeamName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `WriteToken`<sup>Required</sup> <a name="WriteToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.writeToken"></a>

```csharp
public string WriteToken { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ThirdPartyIntegrationConfig <a name="ThirdPartyIntegrationConfig" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ThirdPartyIntegrationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProjectId,
    string Type,
    string AccountId = null,
    string ApiKey = null,
    string ApiToken = null,
    string ChannelName = null,
    object Enabled = null,
    string FlowName = null,
    string Id = null,
    string LicenseKey = null,
    string MicrosoftTeamsWebhookUrl = null,
    string OrgName = null,
    string Password = null,
    string ReadToken = null,
    string Region = null,
    string RoutingKey = null,
    string Scheme = null,
    string Secret = null,
    string ServiceDiscovery = null,
    string ServiceKey = null,
    string TeamName = null,
    string Url = null,
    string UserName = null,
    string WriteToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#project_id ThirdPartyIntegration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#type ThirdPartyIntegration#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#account_id ThirdPartyIntegration#account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#api_key ThirdPartyIntegration#api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.apiToken">ApiToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#api_token ThirdPartyIntegration#api_token}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.channelName">ChannelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#channel_name ThirdPartyIntegration#channel_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#enabled ThirdPartyIntegration#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.flowName">FlowName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#flow_name ThirdPartyIntegration#flow_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#id ThirdPartyIntegration#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.licenseKey">LicenseKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#license_key ThirdPartyIntegration#license_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.microsoftTeamsWebhookUrl">MicrosoftTeamsWebhookUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#microsoft_teams_webhook_url ThirdPartyIntegration#microsoft_teams_webhook_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.orgName">OrgName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#org_name ThirdPartyIntegration#org_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#password ThirdPartyIntegration#password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.readToken">ReadToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#read_token ThirdPartyIntegration#read_token}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#region ThirdPartyIntegration#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.routingKey">RoutingKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#routing_key ThirdPartyIntegration#routing_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#scheme ThirdPartyIntegration#scheme}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.secret">Secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#secret ThirdPartyIntegration#secret}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceDiscovery">ServiceDiscovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#service_discovery ThirdPartyIntegration#service_discovery}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceKey">ServiceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#service_key ThirdPartyIntegration#service_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.teamName">TeamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#team_name ThirdPartyIntegration#team_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#url ThirdPartyIntegration#url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#user_name ThirdPartyIntegration#user_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.writeToken">WriteToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#write_token ThirdPartyIntegration#write_token}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#project_id ThirdPartyIntegration#project_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#type ThirdPartyIntegration#type}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#account_id ThirdPartyIntegration#account_id}.

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#api_key ThirdPartyIntegration#api_key}.

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.apiToken"></a>

```csharp
public string ApiToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#api_token ThirdPartyIntegration#api_token}.

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.channelName"></a>

```csharp
public string ChannelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#channel_name ThirdPartyIntegration#channel_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#enabled ThirdPartyIntegration#enabled}.

---

##### `FlowName`<sup>Optional</sup> <a name="FlowName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.flowName"></a>

```csharp
public string FlowName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#flow_name ThirdPartyIntegration#flow_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#id ThirdPartyIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseKey`<sup>Optional</sup> <a name="LicenseKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.licenseKey"></a>

```csharp
public string LicenseKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#license_key ThirdPartyIntegration#license_key}.

---

##### `MicrosoftTeamsWebhookUrl`<sup>Optional</sup> <a name="MicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.microsoftTeamsWebhookUrl"></a>

```csharp
public string MicrosoftTeamsWebhookUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#microsoft_teams_webhook_url ThirdPartyIntegration#microsoft_teams_webhook_url}.

---

##### `OrgName`<sup>Optional</sup> <a name="OrgName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.orgName"></a>

```csharp
public string OrgName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#org_name ThirdPartyIntegration#org_name}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#password ThirdPartyIntegration#password}.

---

##### `ReadToken`<sup>Optional</sup> <a name="ReadToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.readToken"></a>

```csharp
public string ReadToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#read_token ThirdPartyIntegration#read_token}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#region ThirdPartyIntegration#region}.

---

##### `RoutingKey`<sup>Optional</sup> <a name="RoutingKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.routingKey"></a>

```csharp
public string RoutingKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#routing_key ThirdPartyIntegration#routing_key}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#scheme ThirdPartyIntegration#scheme}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#secret ThirdPartyIntegration#secret}.

---

##### `ServiceDiscovery`<sup>Optional</sup> <a name="ServiceDiscovery" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceDiscovery"></a>

```csharp
public string ServiceDiscovery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#service_discovery ThirdPartyIntegration#service_discovery}.

---

##### `ServiceKey`<sup>Optional</sup> <a name="ServiceKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceKey"></a>

```csharp
public string ServiceKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#service_key ThirdPartyIntegration#service_key}.

---

##### `TeamName`<sup>Optional</sup> <a name="TeamName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.teamName"></a>

```csharp
public string TeamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#team_name ThirdPartyIntegration#team_name}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#url ThirdPartyIntegration#url}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#user_name ThirdPartyIntegration#user_name}.

---

##### `WriteToken`<sup>Optional</sup> <a name="WriteToken" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.writeToken"></a>

```csharp
public string WriteToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/third_party_integration#write_token ThirdPartyIntegration#write_token}.

---



