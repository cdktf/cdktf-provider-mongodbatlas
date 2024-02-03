# `privatelinkEndpointServiceServerless` Submodule <a name="`privatelinkEndpointServiceServerless` Submodule" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatelinkEndpointServiceServerless <a name="PrivatelinkEndpointServiceServerless" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless mongodbatlas_privatelink_endpoint_service_serverless}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new PrivatelinkEndpointServiceServerless(Construct Scope, string Id, PrivatelinkEndpointServiceServerlessConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig">PrivatelinkEndpointServiceServerlessConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig">PrivatelinkEndpointServiceServerlessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetCloudProviderEndpointId">ResetCloudProviderEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetPrivateEndpointIpAddress">ResetPrivateEndpointIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.putTimeouts"></a>

```csharp
private void PutTimeouts(PrivatelinkEndpointServiceServerlessTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>

---

##### `ResetCloudProviderEndpointId` <a name="ResetCloudProviderEndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetCloudProviderEndpointId"></a>

```csharp
private void ResetCloudProviderEndpointId()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivateEndpointIpAddress` <a name="ResetPrivateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetPrivateEndpointIpAddress"></a>

```csharp
private void ResetPrivateEndpointIpAddress()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatelinkEndpointServiceServerless resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

PrivatelinkEndpointServiceServerless.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

PrivatelinkEndpointServiceServerless.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

PrivatelinkEndpointServiceServerless.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

PrivatelinkEndpointServiceServerless.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PrivatelinkEndpointServiceServerless resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivatelinkEndpointServiceServerless to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivatelinkEndpointServiceServerless that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PrivatelinkEndpointServiceServerless to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateLinkServiceResourceId">PrivateLinkServiceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference">PrivatelinkEndpointServiceServerlessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointIdInput">CloudProviderEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddressInput">PrivateEndpointIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerNameInput">ProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointId">CloudProviderEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddress">PrivateEndpointIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PrivateLinkServiceResourceId`<sup>Required</sup> <a name="PrivateLinkServiceResourceId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateLinkServiceResourceId"></a>

```csharp
public string PrivateLinkServiceResourceId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeouts"></a>

```csharp
public PrivatelinkEndpointServiceServerlessTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference">PrivatelinkEndpointServiceServerlessTimeoutsOutputReference</a>

---

##### `CloudProviderEndpointIdInput`<sup>Optional</sup> <a name="CloudProviderEndpointIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointIdInput"></a>

```csharp
public string CloudProviderEndpointIdInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointIpAddressInput`<sup>Optional</sup> <a name="PrivateEndpointIpAddressInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddressInput"></a>

```csharp
public string PrivateEndpointIpAddressInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerNameInput"></a>

```csharp
public string ProviderNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CloudProviderEndpointId`<sup>Required</sup> <a name="CloudProviderEndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointId"></a>

```csharp
public string CloudProviderEndpointId { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `PrivateEndpointIpAddress`<sup>Required</sup> <a name="PrivateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddress"></a>

```csharp
public string PrivateEndpointIpAddress { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatelinkEndpointServiceServerlessConfig <a name="PrivatelinkEndpointServiceServerlessConfig" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new PrivatelinkEndpointServiceServerlessConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EndpointId,
    string InstanceName,
    string ProjectId,
    string ProviderName,
    string CloudProviderEndpointId = null,
    string Comment = null,
    string Id = null,
    string PrivateEndpointIpAddress = null,
    PrivatelinkEndpointServiceServerlessTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#endpoint_id PrivatelinkEndpointServiceServerless#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.instanceName">InstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#instance_name PrivatelinkEndpointServiceServerless#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#project_id PrivatelinkEndpointServiceServerless#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.providerName">ProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#provider_name PrivatelinkEndpointServiceServerless#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.cloudProviderEndpointId">CloudProviderEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#cloud_provider_endpoint_id PrivatelinkEndpointServiceServerless#cloud_provider_endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#comment PrivatelinkEndpointServiceServerless#comment}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#id PrivatelinkEndpointServiceServerless#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.privateEndpointIpAddress">PrivateEndpointIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#private_endpoint_ip_address PrivatelinkEndpointServiceServerless#private_endpoint_ip_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#endpoint_id PrivatelinkEndpointServiceServerless#endpoint_id}.

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#instance_name PrivatelinkEndpointServiceServerless#instance_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#project_id PrivatelinkEndpointServiceServerless#project_id}.

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.providerName"></a>

```csharp
public string ProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#provider_name PrivatelinkEndpointServiceServerless#provider_name}.

---

##### `CloudProviderEndpointId`<sup>Optional</sup> <a name="CloudProviderEndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.cloudProviderEndpointId"></a>

```csharp
public string CloudProviderEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#cloud_provider_endpoint_id PrivatelinkEndpointServiceServerless#cloud_provider_endpoint_id}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#comment PrivatelinkEndpointServiceServerless#comment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#id PrivatelinkEndpointServiceServerless#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateEndpointIpAddress`<sup>Optional</sup> <a name="PrivateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.privateEndpointIpAddress"></a>

```csharp
public string PrivateEndpointIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#private_endpoint_ip_address PrivatelinkEndpointServiceServerless#private_endpoint_ip_address}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.timeouts"></a>

```csharp
public PrivatelinkEndpointServiceServerlessTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#timeouts PrivatelinkEndpointServiceServerless#timeouts}

---

### PrivatelinkEndpointServiceServerlessTimeouts <a name="PrivatelinkEndpointServiceServerlessTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new PrivatelinkEndpointServiceServerlessTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#create PrivatelinkEndpointServiceServerless#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#delete PrivatelinkEndpointServiceServerless#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#create PrivatelinkEndpointServiceServerless#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/resources/privatelink_endpoint_service_serverless#delete PrivatelinkEndpointServiceServerless#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatelinkEndpointServiceServerlessTimeoutsOutputReference <a name="PrivatelinkEndpointServiceServerlessTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new PrivatelinkEndpointServiceServerlessTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



