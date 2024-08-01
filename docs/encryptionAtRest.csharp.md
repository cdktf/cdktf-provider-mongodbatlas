# `encryptionAtRest` Submodule <a name="`encryptionAtRest` Submodule" id="@cdktf/provider-mongodbatlas.encryptionAtRest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EncryptionAtRest <a name="EncryptionAtRest" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest mongodbatlas_encryption_at_rest}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EncryptionAtRest(Construct Scope, string Id, EncryptionAtRestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig">EncryptionAtRestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig">EncryptionAtRestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig">PutAwsKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig">PutAzureKeyVaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig">PutGoogleCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAwsKmsConfig">ResetAwsKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAzureKeyVaultConfig">ResetAzureKeyVaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetGoogleCloudKmsConfig">ResetGoogleCloudKmsConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsKmsConfig` <a name="PutAwsKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig"></a>

```csharp
private void PutAwsKmsConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig.parameter.value"></a>

- *Type:* object

---

##### `PutAzureKeyVaultConfig` <a name="PutAzureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig"></a>

```csharp
private void PutAzureKeyVaultConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig.parameter.value"></a>

- *Type:* object

---

##### `PutGoogleCloudKmsConfig` <a name="PutGoogleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig"></a>

```csharp
private void PutGoogleCloudKmsConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetAwsKmsConfig` <a name="ResetAwsKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAwsKmsConfig"></a>

```csharp
private void ResetAwsKmsConfig()
```

##### `ResetAzureKeyVaultConfig` <a name="ResetAzureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAzureKeyVaultConfig"></a>

```csharp
private void ResetAzureKeyVaultConfig()
```

##### `ResetGoogleCloudKmsConfig` <a name="ResetGoogleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetGoogleCloudKmsConfig"></a>

```csharp
private void ResetGoogleCloudKmsConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EncryptionAtRest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

EncryptionAtRest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

EncryptionAtRest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

EncryptionAtRest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

EncryptionAtRest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EncryptionAtRest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EncryptionAtRest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EncryptionAtRest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EncryptionAtRest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfig">AwsKmsConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList">EncryptionAtRestAwsKmsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfig">AzureKeyVaultConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList">EncryptionAtRestAzureKeyVaultConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfig">GoogleCloudKmsConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList">EncryptionAtRestGoogleCloudKmsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfigInput">AwsKmsConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfigInput">AzureKeyVaultConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfigInput">GoogleCloudKmsConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AwsKmsConfig`<sup>Required</sup> <a name="AwsKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfig"></a>

```csharp
public EncryptionAtRestAwsKmsConfigList AwsKmsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList">EncryptionAtRestAwsKmsConfigList</a>

---

##### `AzureKeyVaultConfig`<sup>Required</sup> <a name="AzureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfig"></a>

```csharp
public EncryptionAtRestAzureKeyVaultConfigList AzureKeyVaultConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList">EncryptionAtRestAzureKeyVaultConfigList</a>

---

##### `GoogleCloudKmsConfig`<sup>Required</sup> <a name="GoogleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfig"></a>

```csharp
public EncryptionAtRestGoogleCloudKmsConfigList GoogleCloudKmsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList">EncryptionAtRestGoogleCloudKmsConfigList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AwsKmsConfigInput`<sup>Optional</sup> <a name="AwsKmsConfigInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfigInput"></a>

```csharp
public object AwsKmsConfigInput { get; }
```

- *Type:* object

---

##### `AzureKeyVaultConfigInput`<sup>Optional</sup> <a name="AzureKeyVaultConfigInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfigInput"></a>

```csharp
public object AzureKeyVaultConfigInput { get; }
```

- *Type:* object

---

##### `GoogleCloudKmsConfigInput`<sup>Optional</sup> <a name="GoogleCloudKmsConfigInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfigInput"></a>

```csharp
public object GoogleCloudKmsConfigInput { get; }
```

- *Type:* object

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EncryptionAtRestAwsKmsConfig <a name="EncryptionAtRestAwsKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EncryptionAtRestAwsKmsConfig {
    string AccessKeyId = null,
    string CustomerMasterKeyId = null,
    object Enabled = null,
    string Region = null,
    string RoleId = null,
    string SecretAccessKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#access_key_id EncryptionAtRest#access_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.customerMasterKeyId">CustomerMasterKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#customer_master_key_id EncryptionAtRest#customer_master_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#region EncryptionAtRest#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.roleId">RoleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#role_id EncryptionAtRest#role_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#secret_access_key EncryptionAtRest#secret_access_key}. |

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#access_key_id EncryptionAtRest#access_key_id}.

---

##### `CustomerMasterKeyId`<sup>Optional</sup> <a name="CustomerMasterKeyId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.customerMasterKeyId"></a>

```csharp
public string CustomerMasterKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#customer_master_key_id EncryptionAtRest#customer_master_key_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#region EncryptionAtRest#region}.

---

##### `RoleId`<sup>Optional</sup> <a name="RoleId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.roleId"></a>

```csharp
public string RoleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#role_id EncryptionAtRest#role_id}.

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#secret_access_key EncryptionAtRest#secret_access_key}.

---

### EncryptionAtRestAzureKeyVaultConfig <a name="EncryptionAtRestAzureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EncryptionAtRestAzureKeyVaultConfig {
    string AzureEnvironment = null,
    string ClientId = null,
    object Enabled = null,
    string KeyIdentifier = null,
    string KeyVaultName = null,
    string ResourceGroupName = null,
    string Secret = null,
    string SubscriptionId = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.azureEnvironment">AzureEnvironment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#azure_environment EncryptionAtRest#azure_environment}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#client_id EncryptionAtRest#client_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyIdentifier">KeyIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#key_identifier EncryptionAtRest#key_identifier}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyVaultName">KeyVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#key_vault_name EncryptionAtRest#key_vault_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#resource_group_name EncryptionAtRest#resource_group_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.secret">Secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#secret EncryptionAtRest#secret}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#subscription_id EncryptionAtRest#subscription_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#tenant_id EncryptionAtRest#tenant_id}. |

---

##### `AzureEnvironment`<sup>Optional</sup> <a name="AzureEnvironment" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.azureEnvironment"></a>

```csharp
public string AzureEnvironment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#azure_environment EncryptionAtRest#azure_environment}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#client_id EncryptionAtRest#client_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}.

---

##### `KeyIdentifier`<sup>Optional</sup> <a name="KeyIdentifier" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyIdentifier"></a>

```csharp
public string KeyIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#key_identifier EncryptionAtRest#key_identifier}.

---

##### `KeyVaultName`<sup>Optional</sup> <a name="KeyVaultName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyVaultName"></a>

```csharp
public string KeyVaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#key_vault_name EncryptionAtRest#key_vault_name}.

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#resource_group_name EncryptionAtRest#resource_group_name}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#secret EncryptionAtRest#secret}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#subscription_id EncryptionAtRest#subscription_id}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#tenant_id EncryptionAtRest#tenant_id}.

---

### EncryptionAtRestConfig <a name="EncryptionAtRestConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EncryptionAtRestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProjectId,
    object AwsKmsConfig = null,
    object AzureKeyVaultConfig = null,
    object GoogleCloudKmsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#project_id EncryptionAtRest#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.awsKmsConfig">AwsKmsConfig</a></code> | <code>object</code> | aws_kms_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.azureKeyVaultConfig">AzureKeyVaultConfig</a></code> | <code>object</code> | azure_key_vault_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.googleCloudKmsConfig">GoogleCloudKmsConfig</a></code> | <code>object</code> | google_cloud_kms_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#project_id EncryptionAtRest#project_id}.

---

##### `AwsKmsConfig`<sup>Optional</sup> <a name="AwsKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.awsKmsConfig"></a>

```csharp
public object AwsKmsConfig { get; set; }
```

- *Type:* object

aws_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#aws_kms_config EncryptionAtRest#aws_kms_config}

---

##### `AzureKeyVaultConfig`<sup>Optional</sup> <a name="AzureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.azureKeyVaultConfig"></a>

```csharp
public object AzureKeyVaultConfig { get; set; }
```

- *Type:* object

azure_key_vault_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#azure_key_vault_config EncryptionAtRest#azure_key_vault_config}

---

##### `GoogleCloudKmsConfig`<sup>Optional</sup> <a name="GoogleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.googleCloudKmsConfig"></a>

```csharp
public object GoogleCloudKmsConfig { get; set; }
```

- *Type:* object

google_cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#google_cloud_kms_config EncryptionAtRest#google_cloud_kms_config}

---

### EncryptionAtRestGoogleCloudKmsConfig <a name="EncryptionAtRestGoogleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EncryptionAtRestGoogleCloudKmsConfig {
    object Enabled = null,
    string KeyVersionResourceId = null,
    string ServiceAccountKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.keyVersionResourceId">KeyVersionResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#key_version_resource_id EncryptionAtRest#key_version_resource_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.serviceAccountKey">ServiceAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#service_account_key EncryptionAtRest#service_account_key}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}.

---

##### `KeyVersionResourceId`<sup>Optional</sup> <a name="KeyVersionResourceId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.keyVersionResourceId"></a>

```csharp
public string KeyVersionResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#key_version_resource_id EncryptionAtRest#key_version_resource_id}.

---

##### `ServiceAccountKey`<sup>Optional</sup> <a name="ServiceAccountKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.serviceAccountKey"></a>

```csharp
public string ServiceAccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/encryption_at_rest#service_account_key EncryptionAtRest#service_account_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### EncryptionAtRestAwsKmsConfigList <a name="EncryptionAtRestAwsKmsConfigList" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EncryptionAtRestAwsKmsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.get"></a>

```csharp
private EncryptionAtRestAwsKmsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EncryptionAtRestAwsKmsConfigOutputReference <a name="EncryptionAtRestAwsKmsConfigOutputReference" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EncryptionAtRestAwsKmsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetCustomerMasterKeyId">ResetCustomerMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRoleId">ResetRoleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetAccessKeyId"></a>

```csharp
private void ResetAccessKeyId()
```

##### `ResetCustomerMasterKeyId` <a name="ResetCustomerMasterKeyId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetCustomerMasterKeyId"></a>

```csharp
private void ResetCustomerMasterKeyId()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoleId` <a name="ResetRoleId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRoleId"></a>

```csharp
private void ResetRoleId()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetSecretAccessKey"></a>

```csharp
private void ResetSecretAccessKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyIdInput">CustomerMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleIdInput">RoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyId">CustomerMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `CustomerMasterKeyIdInput`<sup>Optional</sup> <a name="CustomerMasterKeyIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyIdInput"></a>

```csharp
public string CustomerMasterKeyIdInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleIdInput"></a>

```csharp
public string RoleIdInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKeyInput"></a>

```csharp
public string SecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `CustomerMasterKeyId`<sup>Required</sup> <a name="CustomerMasterKeyId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyId"></a>

```csharp
public string CustomerMasterKeyId { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EncryptionAtRestAzureKeyVaultConfigList <a name="EncryptionAtRestAzureKeyVaultConfigList" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EncryptionAtRestAzureKeyVaultConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.get"></a>

```csharp
private EncryptionAtRestAzureKeyVaultConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EncryptionAtRestAzureKeyVaultConfigOutputReference <a name="EncryptionAtRestAzureKeyVaultConfigOutputReference" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EncryptionAtRestAzureKeyVaultConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetAzureEnvironment">ResetAzureEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyIdentifier">ResetKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyVaultName">ResetKeyVaultName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureEnvironment` <a name="ResetAzureEnvironment" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetAzureEnvironment"></a>

```csharp
private void ResetAzureEnvironment()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetKeyIdentifier` <a name="ResetKeyIdentifier" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyIdentifier"></a>

```csharp
private void ResetKeyIdentifier()
```

##### `ResetKeyVaultName` <a name="ResetKeyVaultName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyVaultName"></a>

```csharp
private void ResetKeyVaultName()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetResourceGroupName"></a>

```csharp
private void ResetResourceGroupName()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetTenantId"></a>

```csharp
private void ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironmentInput">AzureEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifierInput">KeyIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultNameInput">KeyVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironment">AzureEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifier">KeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultName">KeyVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureEnvironmentInput`<sup>Optional</sup> <a name="AzureEnvironmentInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironmentInput"></a>

```csharp
public string AzureEnvironmentInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `KeyIdentifierInput`<sup>Optional</sup> <a name="KeyIdentifierInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifierInput"></a>

```csharp
public string KeyIdentifierInput { get; }
```

- *Type:* string

---

##### `KeyVaultNameInput`<sup>Optional</sup> <a name="KeyVaultNameInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultNameInput"></a>

```csharp
public string KeyVaultNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `AzureEnvironment`<sup>Required</sup> <a name="AzureEnvironment" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironment"></a>

```csharp
public string AzureEnvironment { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `KeyIdentifier`<sup>Required</sup> <a name="KeyIdentifier" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifier"></a>

```csharp
public string KeyIdentifier { get; }
```

- *Type:* string

---

##### `KeyVaultName`<sup>Required</sup> <a name="KeyVaultName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultName"></a>

```csharp
public string KeyVaultName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EncryptionAtRestGoogleCloudKmsConfigList <a name="EncryptionAtRestGoogleCloudKmsConfigList" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EncryptionAtRestGoogleCloudKmsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.get"></a>

```csharp
private EncryptionAtRestGoogleCloudKmsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EncryptionAtRestGoogleCloudKmsConfigOutputReference <a name="EncryptionAtRestGoogleCloudKmsConfigOutputReference" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new EncryptionAtRestGoogleCloudKmsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetKeyVersionResourceId">ResetKeyVersionResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetServiceAccountKey">ResetServiceAccountKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetKeyVersionResourceId` <a name="ResetKeyVersionResourceId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetKeyVersionResourceId"></a>

```csharp
private void ResetKeyVersionResourceId()
```

##### `ResetServiceAccountKey` <a name="ResetServiceAccountKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetServiceAccountKey"></a>

```csharp
private void ResetServiceAccountKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceIdInput">KeyVersionResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKeyInput">ServiceAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceId">KeyVersionResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKey">ServiceAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `KeyVersionResourceIdInput`<sup>Optional</sup> <a name="KeyVersionResourceIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceIdInput"></a>

```csharp
public string KeyVersionResourceIdInput { get; }
```

- *Type:* string

---

##### `ServiceAccountKeyInput`<sup>Optional</sup> <a name="ServiceAccountKeyInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKeyInput"></a>

```csharp
public string ServiceAccountKeyInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `KeyVersionResourceId`<sup>Required</sup> <a name="KeyVersionResourceId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceId"></a>

```csharp
public string KeyVersionResourceId { get; }
```

- *Type:* string

---

##### `ServiceAccountKey`<sup>Required</sup> <a name="ServiceAccountKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKey"></a>

```csharp
public string ServiceAccountKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



