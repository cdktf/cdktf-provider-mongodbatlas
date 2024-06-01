# `serverlessInstance` Submodule <a name="`serverlessInstance` Submodule" id="@cdktf/provider-mongodbatlas.serverlessInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessInstance <a name="ServerlessInstance" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance mongodbatlas_serverless_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ServerlessInstance(Construct Scope, string Id, ServerlessInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig">ServerlessInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig">ServerlessInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putLinks">PutLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetAutoIndexing">ResetAutoIndexing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetContinuousBackupEnabled">ResetContinuousBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetLinks">ResetLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetStateName">ResetStateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetTerminationProtectionEnabled">ResetTerminationProtectionEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLinks` <a name="PutLinks" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putLinks"></a>

```csharp
private void PutLinks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putLinks.parameter.value"></a>

- *Type:* object

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.putTags.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoIndexing` <a name="ResetAutoIndexing" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetAutoIndexing"></a>

```csharp
private void ResetAutoIndexing()
```

##### `ResetContinuousBackupEnabled` <a name="ResetContinuousBackupEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetContinuousBackupEnabled"></a>

```csharp
private void ResetContinuousBackupEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLinks` <a name="ResetLinks" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetLinks"></a>

```csharp
private void ResetLinks()
```

##### `ResetStateName` <a name="ResetStateName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetStateName"></a>

```csharp
private void ResetStateName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTerminationProtectionEnabled` <a name="ResetTerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.resetTerminationProtectionEnabled"></a>

```csharp
private void ResetTerminationProtectionEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServerlessInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

ServerlessInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

ServerlessInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

ServerlessInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

ServerlessInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServerlessInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServerlessInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServerlessInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServerlessInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connectionStringsPrivateEndpointSrv">ConnectionStringsPrivateEndpointSrv</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connectionStringsStandardSrv">ConnectionStringsStandardSrv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.createDate">CreateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.links">Links</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList">ServerlessInstanceLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.mongoDbVersion">MongoDbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList">ServerlessInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.autoIndexingInput">AutoIndexingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.continuousBackupEnabledInput">ContinuousBackupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.linksInput">LinksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsBackingProviderNameInput">ProviderSettingsBackingProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsProviderNameInput">ProviderSettingsProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsRegionNameInput">ProviderSettingsRegionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.stateNameInput">StateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terminationProtectionEnabledInput">TerminationProtectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.autoIndexing">AutoIndexing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.continuousBackupEnabled">ContinuousBackupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsBackingProviderName">ProviderSettingsBackingProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsProviderName">ProviderSettingsProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsRegionName">ProviderSettingsRegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.stateName">StateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terminationProtectionEnabled">TerminationProtectionEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConnectionStringsPrivateEndpointSrv`<sup>Required</sup> <a name="ConnectionStringsPrivateEndpointSrv" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connectionStringsPrivateEndpointSrv"></a>

```csharp
public string[] ConnectionStringsPrivateEndpointSrv { get; }
```

- *Type:* string[]

---

##### `ConnectionStringsStandardSrv`<sup>Required</sup> <a name="ConnectionStringsStandardSrv" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.connectionStringsStandardSrv"></a>

```csharp
public string ConnectionStringsStandardSrv { get; }
```

- *Type:* string

---

##### `CreateDate`<sup>Required</sup> <a name="CreateDate" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.createDate"></a>

```csharp
public string CreateDate { get; }
```

- *Type:* string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.links"></a>

```csharp
public ServerlessInstanceLinksList Links { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList">ServerlessInstanceLinksList</a>

---

##### `MongoDbVersion`<sup>Required</sup> <a name="MongoDbVersion" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.mongoDbVersion"></a>

```csharp
public string MongoDbVersion { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tags"></a>

```csharp
public ServerlessInstanceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList">ServerlessInstanceTagsList</a>

---

##### `AutoIndexingInput`<sup>Optional</sup> <a name="AutoIndexingInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.autoIndexingInput"></a>

```csharp
public object AutoIndexingInput { get; }
```

- *Type:* object

---

##### `ContinuousBackupEnabledInput`<sup>Optional</sup> <a name="ContinuousBackupEnabledInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.continuousBackupEnabledInput"></a>

```csharp
public object ContinuousBackupEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinksInput`<sup>Optional</sup> <a name="LinksInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.linksInput"></a>

```csharp
public object LinksInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProviderSettingsBackingProviderNameInput`<sup>Optional</sup> <a name="ProviderSettingsBackingProviderNameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsBackingProviderNameInput"></a>

```csharp
public string ProviderSettingsBackingProviderNameInput { get; }
```

- *Type:* string

---

##### `ProviderSettingsProviderNameInput`<sup>Optional</sup> <a name="ProviderSettingsProviderNameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsProviderNameInput"></a>

```csharp
public string ProviderSettingsProviderNameInput { get; }
```

- *Type:* string

---

##### `ProviderSettingsRegionNameInput`<sup>Optional</sup> <a name="ProviderSettingsRegionNameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsRegionNameInput"></a>

```csharp
public string ProviderSettingsRegionNameInput { get; }
```

- *Type:* string

---

##### `StateNameInput`<sup>Optional</sup> <a name="StateNameInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.stateNameInput"></a>

```csharp
public string StateNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `TerminationProtectionEnabledInput`<sup>Optional</sup> <a name="TerminationProtectionEnabledInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terminationProtectionEnabledInput"></a>

```csharp
public object TerminationProtectionEnabledInput { get; }
```

- *Type:* object

---

##### `AutoIndexing`<sup>Required</sup> <a name="AutoIndexing" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.autoIndexing"></a>

```csharp
public object AutoIndexing { get; }
```

- *Type:* object

---

##### `ContinuousBackupEnabled`<sup>Required</sup> <a name="ContinuousBackupEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.continuousBackupEnabled"></a>

```csharp
public object ContinuousBackupEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ProviderSettingsBackingProviderName`<sup>Required</sup> <a name="ProviderSettingsBackingProviderName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsBackingProviderName"></a>

```csharp
public string ProviderSettingsBackingProviderName { get; }
```

- *Type:* string

---

##### `ProviderSettingsProviderName`<sup>Required</sup> <a name="ProviderSettingsProviderName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsProviderName"></a>

```csharp
public string ProviderSettingsProviderName { get; }
```

- *Type:* string

---

##### `ProviderSettingsRegionName`<sup>Required</sup> <a name="ProviderSettingsRegionName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.providerSettingsRegionName"></a>

```csharp
public string ProviderSettingsRegionName { get; }
```

- *Type:* string

---

##### `StateName`<sup>Required</sup> <a name="StateName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.stateName"></a>

```csharp
public string StateName { get; }
```

- *Type:* string

---

##### `TerminationProtectionEnabled`<sup>Required</sup> <a name="TerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.terminationProtectionEnabled"></a>

```csharp
public object TerminationProtectionEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerlessInstanceConfig <a name="ServerlessInstanceConfig" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ServerlessInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ProjectId,
    string ProviderSettingsBackingProviderName,
    string ProviderSettingsProviderName,
    string ProviderSettingsRegionName,
    object AutoIndexing = null,
    object ContinuousBackupEnabled = null,
    string Id = null,
    object Links = null,
    string StateName = null,
    object Tags = null,
    object TerminationProtectionEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#name ServerlessInstance#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#project_id ServerlessInstance#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsBackingProviderName">ProviderSettingsBackingProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#provider_settings_backing_provider_name ServerlessInstance#provider_settings_backing_provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsProviderName">ProviderSettingsProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#provider_settings_provider_name ServerlessInstance#provider_settings_provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsRegionName">ProviderSettingsRegionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#provider_settings_region_name ServerlessInstance#provider_settings_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.autoIndexing">AutoIndexing</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#auto_indexing ServerlessInstance#auto_indexing}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.continuousBackupEnabled">ContinuousBackupEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#continuous_backup_enabled ServerlessInstance#continuous_backup_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#id ServerlessInstance#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.links">Links</a></code> | <code>object</code> | links block. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.stateName">StateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#state_name ServerlessInstance#state_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.terminationProtectionEnabled">TerminationProtectionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#termination_protection_enabled ServerlessInstance#termination_protection_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#name ServerlessInstance#name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#project_id ServerlessInstance#project_id}.

---

##### `ProviderSettingsBackingProviderName`<sup>Required</sup> <a name="ProviderSettingsBackingProviderName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsBackingProviderName"></a>

```csharp
public string ProviderSettingsBackingProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#provider_settings_backing_provider_name ServerlessInstance#provider_settings_backing_provider_name}.

---

##### `ProviderSettingsProviderName`<sup>Required</sup> <a name="ProviderSettingsProviderName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsProviderName"></a>

```csharp
public string ProviderSettingsProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#provider_settings_provider_name ServerlessInstance#provider_settings_provider_name}.

---

##### `ProviderSettingsRegionName`<sup>Required</sup> <a name="ProviderSettingsRegionName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.providerSettingsRegionName"></a>

```csharp
public string ProviderSettingsRegionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#provider_settings_region_name ServerlessInstance#provider_settings_region_name}.

---

##### `AutoIndexing`<sup>Optional</sup> <a name="AutoIndexing" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.autoIndexing"></a>

```csharp
public object AutoIndexing { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#auto_indexing ServerlessInstance#auto_indexing}.

---

##### `ContinuousBackupEnabled`<sup>Optional</sup> <a name="ContinuousBackupEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.continuousBackupEnabled"></a>

```csharp
public object ContinuousBackupEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#continuous_backup_enabled ServerlessInstance#continuous_backup_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#id ServerlessInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Links`<sup>Optional</sup> <a name="Links" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.links"></a>

```csharp
public object Links { get; set; }
```

- *Type:* object

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#links ServerlessInstance#links}

---

##### `StateName`<sup>Optional</sup> <a name="StateName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.stateName"></a>

```csharp
public string StateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#state_name ServerlessInstance#state_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#tags ServerlessInstance#tags}

---

##### `TerminationProtectionEnabled`<sup>Optional</sup> <a name="TerminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceConfig.property.terminationProtectionEnabled"></a>

```csharp
public object TerminationProtectionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#termination_protection_enabled ServerlessInstance#termination_protection_enabled}.

---

### ServerlessInstanceLinks <a name="ServerlessInstanceLinks" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ServerlessInstanceLinks {
    string Href = null,
    string Rel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.property.href">Href</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#href ServerlessInstance#href}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.property.rel">Rel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#rel ServerlessInstance#rel}. |

---

##### `Href`<sup>Optional</sup> <a name="Href" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.property.href"></a>

```csharp
public string Href { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#href ServerlessInstance#href}.

---

##### `Rel`<sup>Optional</sup> <a name="Rel" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinks.property.rel"></a>

```csharp
public string Rel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#rel ServerlessInstance#rel}.

---

### ServerlessInstanceTags <a name="ServerlessInstanceTags" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ServerlessInstanceTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#key ServerlessInstance#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#value ServerlessInstance#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#key ServerlessInstance#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/serverless_instance#value ServerlessInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServerlessInstanceLinksList <a name="ServerlessInstanceLinksList" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ServerlessInstanceLinksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.get"></a>

```csharp
private ServerlessInstanceLinksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServerlessInstanceLinksOutputReference <a name="ServerlessInstanceLinksOutputReference" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ServerlessInstanceLinksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resetHref">ResetHref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resetRel">ResetRel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHref` <a name="ResetHref" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resetHref"></a>

```csharp
private void ResetHref()
```

##### `ResetRel` <a name="ResetRel" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.resetRel"></a>

```csharp
private void ResetRel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.hrefInput">HrefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.relInput">RelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.href">Href</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.rel">Rel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HrefInput`<sup>Optional</sup> <a name="HrefInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.hrefInput"></a>

```csharp
public string HrefInput { get; }
```

- *Type:* string

---

##### `RelInput`<sup>Optional</sup> <a name="RelInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.relInput"></a>

```csharp
public string RelInput { get; }
```

- *Type:* string

---

##### `Href`<sup>Required</sup> <a name="Href" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.href"></a>

```csharp
public string Href { get; }
```

- *Type:* string

---

##### `Rel`<sup>Required</sup> <a name="Rel" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.rel"></a>

```csharp
public string Rel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceLinksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServerlessInstanceTagsList <a name="ServerlessInstanceTagsList" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ServerlessInstanceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.get"></a>

```csharp
private ServerlessInstanceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServerlessInstanceTagsOutputReference <a name="ServerlessInstanceTagsOutputReference" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ServerlessInstanceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.serverlessInstance.ServerlessInstanceTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



