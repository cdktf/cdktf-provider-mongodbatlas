# `federatedSettingsIdentityProvider` Submodule <a name="`federatedSettingsIdentityProvider` Submodule" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedSettingsIdentityProvider <a name="FederatedSettingsIdentityProvider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider mongodbatlas_federated_settings_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new FederatedSettingsIdentityProvider(Construct Scope, string Id, FederatedSettingsIdentityProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig">FederatedSettingsIdentityProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig">FederatedSettingsIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAssociatedDomains">ResetAssociatedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetGroupsClaim">ResetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetIdpType">ResetIdpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetRequestBinding">ResetRequestBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetRequestedScopes">ResetRequestedScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetResponseSignatureAlgorithm">ResetResponseSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetSsoDebugEnabled">ResetSsoDebugEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetSsoUrl">ResetSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetUserClaim">ResetUserClaim</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAssociatedDomains` <a name="ResetAssociatedDomains" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAssociatedDomains"></a>

```csharp
private void ResetAssociatedDomains()
```

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAudience"></a>

```csharp
private void ResetAudience()
```

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAuthorizationType"></a>

```csharp
private void ResetAuthorizationType()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGroupsClaim` <a name="ResetGroupsClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetGroupsClaim"></a>

```csharp
private void ResetGroupsClaim()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdpType` <a name="ResetIdpType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetIdpType"></a>

```csharp
private void ResetIdpType()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRequestBinding` <a name="ResetRequestBinding" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetRequestBinding"></a>

```csharp
private void ResetRequestBinding()
```

##### `ResetRequestedScopes` <a name="ResetRequestedScopes" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetRequestedScopes"></a>

```csharp
private void ResetRequestedScopes()
```

##### `ResetResponseSignatureAlgorithm` <a name="ResetResponseSignatureAlgorithm" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetResponseSignatureAlgorithm"></a>

```csharp
private void ResetResponseSignatureAlgorithm()
```

##### `ResetSsoDebugEnabled` <a name="ResetSsoDebugEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetSsoDebugEnabled"></a>

```csharp
private void ResetSsoDebugEnabled()
```

##### `ResetSsoUrl` <a name="ResetSsoUrl" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetSsoUrl"></a>

```csharp
private void ResetSsoUrl()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUserClaim` <a name="ResetUserClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetUserClaim"></a>

```csharp
private void ResetUserClaim()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FederatedSettingsIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

FederatedSettingsIdentityProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

FederatedSettingsIdentityProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

FederatedSettingsIdentityProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

FederatedSettingsIdentityProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FederatedSettingsIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FederatedSettingsIdentityProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FederatedSettingsIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FederatedSettingsIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpId">IdpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.oktaIdpId">OktaIdpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.associatedDomainsInput">AssociatedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.federationSettingsIdInput">FederationSettingsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.groupsClaimInput">GroupsClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpTypeInput">IdpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.issuerUriInput">IssuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestBindingInput">RequestBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestedScopesInput">RequestedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.responseSignatureAlgorithmInput">ResponseSignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoDebugEnabledInput">SsoDebugEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoUrlInput">SsoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.userClaimInput">UserClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.associatedDomains">AssociatedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.federationSettingsId">FederationSettingsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.groupsClaim">GroupsClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpType">IdpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.issuerUri">IssuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestBinding">RequestBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestedScopes">RequestedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.responseSignatureAlgorithm">ResponseSignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoDebugEnabled">SsoDebugEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoUrl">SsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.userClaim">UserClaim</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpId"></a>

```csharp
public string IdpId { get; }
```

- *Type:* string

---

##### `OktaIdpId`<sup>Required</sup> <a name="OktaIdpId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.oktaIdpId"></a>

```csharp
public string OktaIdpId { get; }
```

- *Type:* string

---

##### `AssociatedDomainsInput`<sup>Optional</sup> <a name="AssociatedDomainsInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.associatedDomainsInput"></a>

```csharp
public string[] AssociatedDomainsInput { get; }
```

- *Type:* string[]

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.authorizationTypeInput"></a>

```csharp
public string AuthorizationTypeInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FederationSettingsIdInput`<sup>Optional</sup> <a name="FederationSettingsIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.federationSettingsIdInput"></a>

```csharp
public string FederationSettingsIdInput { get; }
```

- *Type:* string

---

##### `GroupsClaimInput`<sup>Optional</sup> <a name="GroupsClaimInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.groupsClaimInput"></a>

```csharp
public string GroupsClaimInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpTypeInput`<sup>Optional</sup> <a name="IdpTypeInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpTypeInput"></a>

```csharp
public string IdpTypeInput { get; }
```

- *Type:* string

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.issuerUriInput"></a>

```csharp
public string IssuerUriInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RequestBindingInput`<sup>Optional</sup> <a name="RequestBindingInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestBindingInput"></a>

```csharp
public string RequestBindingInput { get; }
```

- *Type:* string

---

##### `RequestedScopesInput`<sup>Optional</sup> <a name="RequestedScopesInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestedScopesInput"></a>

```csharp
public string[] RequestedScopesInput { get; }
```

- *Type:* string[]

---

##### `ResponseSignatureAlgorithmInput`<sup>Optional</sup> <a name="ResponseSignatureAlgorithmInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.responseSignatureAlgorithmInput"></a>

```csharp
public string ResponseSignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `SsoDebugEnabledInput`<sup>Optional</sup> <a name="SsoDebugEnabledInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoDebugEnabledInput"></a>

```csharp
public object SsoDebugEnabledInput { get; }
```

- *Type:* object

---

##### `SsoUrlInput`<sup>Optional</sup> <a name="SsoUrlInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoUrlInput"></a>

```csharp
public string SsoUrlInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UserClaimInput`<sup>Optional</sup> <a name="UserClaimInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.userClaimInput"></a>

```csharp
public string UserClaimInput { get; }
```

- *Type:* string

---

##### `AssociatedDomains`<sup>Required</sup> <a name="AssociatedDomains" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.associatedDomains"></a>

```csharp
public string[] AssociatedDomains { get; }
```

- *Type:* string[]

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.federationSettingsId"></a>

```csharp
public string FederationSettingsId { get; }
```

- *Type:* string

---

##### `GroupsClaim`<sup>Required</sup> <a name="GroupsClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.groupsClaim"></a>

```csharp
public string GroupsClaim { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdpType`<sup>Required</sup> <a name="IdpType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpType"></a>

```csharp
public string IdpType { get; }
```

- *Type:* string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.issuerUri"></a>

```csharp
public string IssuerUri { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RequestBinding`<sup>Required</sup> <a name="RequestBinding" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestBinding"></a>

```csharp
public string RequestBinding { get; }
```

- *Type:* string

---

##### `RequestedScopes`<sup>Required</sup> <a name="RequestedScopes" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestedScopes"></a>

```csharp
public string[] RequestedScopes { get; }
```

- *Type:* string[]

---

##### `ResponseSignatureAlgorithm`<sup>Required</sup> <a name="ResponseSignatureAlgorithm" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.responseSignatureAlgorithm"></a>

```csharp
public string ResponseSignatureAlgorithm { get; }
```

- *Type:* string

---

##### `SsoDebugEnabled`<sup>Required</sup> <a name="SsoDebugEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoDebugEnabled"></a>

```csharp
public object SsoDebugEnabled { get; }
```

- *Type:* object

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoUrl"></a>

```csharp
public string SsoUrl { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UserClaim`<sup>Required</sup> <a name="UserClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.userClaim"></a>

```csharp
public string UserClaim { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedSettingsIdentityProviderConfig <a name="FederatedSettingsIdentityProviderConfig" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new FederatedSettingsIdentityProviderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FederationSettingsId,
    string IssuerUri,
    string Name,
    string[] AssociatedDomains = null,
    string Audience = null,
    string AuthorizationType = null,
    string ClientId = null,
    string Description = null,
    string GroupsClaim = null,
    string Id = null,
    string IdpType = null,
    string Protocol = null,
    string RequestBinding = null,
    string[] RequestedScopes = null,
    string ResponseSignatureAlgorithm = null,
    object SsoDebugEnabled = null,
    string SsoUrl = null,
    string Status = null,
    string UserClaim = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.federationSettingsId">FederationSettingsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#federation_settings_id FederatedSettingsIdentityProvider#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.issuerUri">IssuerUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#issuer_uri FederatedSettingsIdentityProvider#issuer_uri}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#name FederatedSettingsIdentityProvider#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.associatedDomains">AssociatedDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#associated_domains FederatedSettingsIdentityProvider#associated_domains}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.audience">Audience</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#audience FederatedSettingsIdentityProvider#audience}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#authorization_type FederatedSettingsIdentityProvider#authorization_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#client_id FederatedSettingsIdentityProvider#client_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#description FederatedSettingsIdentityProvider#description}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.groupsClaim">GroupsClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#groups_claim FederatedSettingsIdentityProvider#groups_claim}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#id FederatedSettingsIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.idpType">IdpType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#idp_type FederatedSettingsIdentityProvider#idp_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#protocol FederatedSettingsIdentityProvider#protocol}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.requestBinding">RequestBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#request_binding FederatedSettingsIdentityProvider#request_binding}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.requestedScopes">RequestedScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#requested_scopes FederatedSettingsIdentityProvider#requested_scopes}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.responseSignatureAlgorithm">ResponseSignatureAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#response_signature_algorithm FederatedSettingsIdentityProvider#response_signature_algorithm}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.ssoDebugEnabled">SsoDebugEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#sso_debug_enabled FederatedSettingsIdentityProvider#sso_debug_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.ssoUrl">SsoUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#sso_url FederatedSettingsIdentityProvider#sso_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#status FederatedSettingsIdentityProvider#status}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.userClaim">UserClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#user_claim FederatedSettingsIdentityProvider#user_claim}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FederationSettingsId`<sup>Required</sup> <a name="FederationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.federationSettingsId"></a>

```csharp
public string FederationSettingsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#federation_settings_id FederatedSettingsIdentityProvider#federation_settings_id}.

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.issuerUri"></a>

```csharp
public string IssuerUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#issuer_uri FederatedSettingsIdentityProvider#issuer_uri}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#name FederatedSettingsIdentityProvider#name}.

---

##### `AssociatedDomains`<sup>Optional</sup> <a name="AssociatedDomains" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.associatedDomains"></a>

```csharp
public string[] AssociatedDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#associated_domains FederatedSettingsIdentityProvider#associated_domains}.

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#audience FederatedSettingsIdentityProvider#audience}.

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#authorization_type FederatedSettingsIdentityProvider#authorization_type}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#client_id FederatedSettingsIdentityProvider#client_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#description FederatedSettingsIdentityProvider#description}.

---

##### `GroupsClaim`<sup>Optional</sup> <a name="GroupsClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.groupsClaim"></a>

```csharp
public string GroupsClaim { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#groups_claim FederatedSettingsIdentityProvider#groups_claim}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#id FederatedSettingsIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdpType`<sup>Optional</sup> <a name="IdpType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.idpType"></a>

```csharp
public string IdpType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#idp_type FederatedSettingsIdentityProvider#idp_type}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#protocol FederatedSettingsIdentityProvider#protocol}.

---

##### `RequestBinding`<sup>Optional</sup> <a name="RequestBinding" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.requestBinding"></a>

```csharp
public string RequestBinding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#request_binding FederatedSettingsIdentityProvider#request_binding}.

---

##### `RequestedScopes`<sup>Optional</sup> <a name="RequestedScopes" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.requestedScopes"></a>

```csharp
public string[] RequestedScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#requested_scopes FederatedSettingsIdentityProvider#requested_scopes}.

---

##### `ResponseSignatureAlgorithm`<sup>Optional</sup> <a name="ResponseSignatureAlgorithm" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.responseSignatureAlgorithm"></a>

```csharp
public string ResponseSignatureAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#response_signature_algorithm FederatedSettingsIdentityProvider#response_signature_algorithm}.

---

##### `SsoDebugEnabled`<sup>Optional</sup> <a name="SsoDebugEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.ssoDebugEnabled"></a>

```csharp
public object SsoDebugEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#sso_debug_enabled FederatedSettingsIdentityProvider#sso_debug_enabled}.

---

##### `SsoUrl`<sup>Optional</sup> <a name="SsoUrl" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.ssoUrl"></a>

```csharp
public string SsoUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#sso_url FederatedSettingsIdentityProvider#sso_url}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#status FederatedSettingsIdentityProvider#status}.

---

##### `UserClaim`<sup>Optional</sup> <a name="UserClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.userClaim"></a>

```csharp
public string UserClaim { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/federated_settings_identity_provider#user_claim FederatedSettingsIdentityProvider#user_claim}.

---



