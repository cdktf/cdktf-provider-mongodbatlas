# `privatelinkEndpointServiceDataFederationOnlineArchive` Submodule <a name="`privatelinkEndpointServiceDataFederationOnlineArchive` Submodule" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatelinkEndpointServiceDataFederationOnlineArchive <a name="PrivatelinkEndpointServiceDataFederationOnlineArchive" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive mongodbatlas_privatelink_endpoint_service_data_federation_online_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new PrivatelinkEndpointServiceDataFederationOnlineArchive(Construct Scope, string Id, PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig">PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig">PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetCustomerEndpointDnsName">ResetCustomerEndpointDnsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.putTimeouts"></a>

```csharp
private void PutTimeouts(PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCustomerEndpointDnsName` <a name="ResetCustomerEndpointDnsName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetCustomerEndpointDnsName"></a>

```csharp
private void ResetCustomerEndpointDnsName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatelinkEndpointServiceDataFederationOnlineArchive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

PrivatelinkEndpointServiceDataFederationOnlineArchive.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

PrivatelinkEndpointServiceDataFederationOnlineArchive.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

PrivatelinkEndpointServiceDataFederationOnlineArchive.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

PrivatelinkEndpointServiceDataFederationOnlineArchive.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PrivatelinkEndpointServiceDataFederationOnlineArchive resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivatelinkEndpointServiceDataFederationOnlineArchive to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivatelinkEndpointServiceDataFederationOnlineArchive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PrivatelinkEndpointServiceDataFederationOnlineArchive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.customerEndpointDnsNameInput">CustomerEndpointDnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerNameInput">ProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.customerEndpointDnsName">CustomerEndpointDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.timeouts"></a>

```csharp
public PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CustomerEndpointDnsNameInput`<sup>Optional</sup> <a name="CustomerEndpointDnsNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.customerEndpointDnsNameInput"></a>

```csharp
public string CustomerEndpointDnsNameInput { get; }
```

- *Type:* string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerNameInput"></a>

```csharp
public string ProviderNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CustomerEndpointDnsName`<sup>Required</sup> <a name="CustomerEndpointDnsName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.customerEndpointDnsName"></a>

```csharp
public string CustomerEndpointDnsName { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig <a name="PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EndpointId,
    string ProjectId,
    string ProviderName,
    string Comment = null,
    string CustomerEndpointDnsName = null,
    string Id = null,
    string Region = null,
    PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id PrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#project_id PrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.providerName">ProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#provider_name PrivatelinkEndpointServiceDataFederationOnlineArchive#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#comment PrivatelinkEndpointServiceDataFederationOnlineArchive#comment}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.customerEndpointDnsName">CustomerEndpointDnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#customer_endpoint_dns_name PrivatelinkEndpointServiceDataFederationOnlineArchive#customer_endpoint_dns_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#id PrivatelinkEndpointServiceDataFederationOnlineArchive#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#region PrivatelinkEndpointServiceDataFederationOnlineArchive#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id PrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#project_id PrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}.

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.providerName"></a>

```csharp
public string ProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#provider_name PrivatelinkEndpointServiceDataFederationOnlineArchive#provider_name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#comment PrivatelinkEndpointServiceDataFederationOnlineArchive#comment}.

---

##### `CustomerEndpointDnsName`<sup>Optional</sup> <a name="CustomerEndpointDnsName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.customerEndpointDnsName"></a>

```csharp
public string CustomerEndpointDnsName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#customer_endpoint_dns_name PrivatelinkEndpointServiceDataFederationOnlineArchive#customer_endpoint_dns_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#id PrivatelinkEndpointServiceDataFederationOnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#region PrivatelinkEndpointServiceDataFederationOnlineArchive#region}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.timeouts"></a>

```csharp
public PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#timeouts PrivatelinkEndpointServiceDataFederationOnlineArchive#timeouts}

---

### PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts <a name="PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#create PrivatelinkEndpointServiceDataFederationOnlineArchive#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#delete PrivatelinkEndpointServiceDataFederationOnlineArchive#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#create PrivatelinkEndpointServiceDataFederationOnlineArchive#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#delete PrivatelinkEndpointServiceDataFederationOnlineArchive#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference <a name="PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



