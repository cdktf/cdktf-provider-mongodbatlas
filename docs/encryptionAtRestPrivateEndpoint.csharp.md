# `encryptionAtRestPrivateEndpoint` Submodule <a name="`encryptionAtRestPrivateEndpoint` Submodule" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EncryptionAtRestPrivateEndpoint <a name="EncryptionAtRestPrivateEndpoint" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/encryption_at_rest_private_endpoint mongodbatlas_encryption_at_rest_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EncryptionAtRestPrivateEndpoint(Construct Scope, string Id, EncryptionAtRestPrivateEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig">EncryptionAtRestPrivateEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig">EncryptionAtRestPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EncryptionAtRestPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

EncryptionAtRestPrivateEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

EncryptionAtRestPrivateEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

EncryptionAtRestPrivateEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

EncryptionAtRestPrivateEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EncryptionAtRestPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EncryptionAtRestPrivateEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EncryptionAtRestPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/encryption_at_rest_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EncryptionAtRestPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.privateEndpointConnectionName">PrivateEndpointConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.cloudProviderInput">CloudProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.regionNameInput">RegionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.regionName">RegionName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateEndpointConnectionName`<sup>Required</sup> <a name="PrivateEndpointConnectionName" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.privateEndpointConnectionName"></a>

```csharp
public string PrivateEndpointConnectionName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.cloudProviderInput"></a>

```csharp
public string CloudProviderInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.regionNameInput"></a>

```csharp
public string RegionNameInput { get; }
```

- *Type:* string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.regionName"></a>

```csharp
public string RegionName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EncryptionAtRestPrivateEndpointConfig <a name="EncryptionAtRestPrivateEndpointConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EncryptionAtRestPrivateEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CloudProvider,
    string ProjectId,
    string RegionName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | Label that identifies the cloud provider for the Encryption At Rest private endpoint. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.regionName">RegionName</a></code> | <code>string</code> | Cloud provider region in which the Encryption At Rest private endpoint is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; set; }
```

- *Type:* string

Label that identifies the cloud provider for the Encryption At Rest private endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/encryption_at_rest_private_endpoint#cloud_provider EncryptionAtRestPrivateEndpoint#cloud_provider}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/encryption_at_rest_private_endpoint#project_id EncryptionAtRestPrivateEndpoint#project_id}

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.regionName"></a>

```csharp
public string RegionName { get; set; }
```

- *Type:* string

Cloud provider region in which the Encryption At Rest private endpoint is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/encryption_at_rest_private_endpoint#region_name EncryptionAtRestPrivateEndpoint#region_name}

---



