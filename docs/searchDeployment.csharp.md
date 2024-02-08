# `searchDeployment` Submodule <a name="`searchDeployment` Submodule" id="@cdktf/provider-mongodbatlas.searchDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SearchDeployment <a name="SearchDeployment" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/search_deployment mongodbatlas_search_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new SearchDeployment(Construct Scope, string Id, SearchDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig">SearchDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig">SearchDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.putSpecs">PutSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSpecs` <a name="PutSpecs" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.putSpecs"></a>

```csharp
private void PutSpecs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.putSpecs.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(SearchDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeouts">SearchDeploymentTimeouts</a>

---

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SearchDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

SearchDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

SearchDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

SearchDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

SearchDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SearchDeployment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SearchDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SearchDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/search_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SearchDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.specs">Specs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList">SearchDeploymentSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.stateName">StateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference">SearchDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.specsInput">SpecsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Specs`<sup>Required</sup> <a name="Specs" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.specs"></a>

```csharp
public SearchDeploymentSpecsList Specs { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList">SearchDeploymentSpecsList</a>

---

##### `StateName`<sup>Required</sup> <a name="StateName" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.stateName"></a>

```csharp
public string StateName { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.timeouts"></a>

```csharp
public SearchDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference">SearchDeploymentTimeoutsOutputReference</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `SpecsInput`<sup>Optional</sup> <a name="SpecsInput" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.specsInput"></a>

```csharp
public object SpecsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SearchDeploymentConfig <a name="SearchDeploymentConfig" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new SearchDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string ProjectId,
    object Specs,
    SearchDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Label that identifies the cluster to return the search nodes for. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Unique 24-hexadecimal character string that identifies the project. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.specs">Specs</a></code> | <code>object</code> | List of settings that configure the search nodes for your cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeouts">SearchDeploymentTimeouts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/search_deployment#timeouts SearchDeployment#timeouts}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Label that identifies the cluster to return the search nodes for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/search_deployment#cluster_name SearchDeployment#cluster_name}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Unique 24-hexadecimal character string that identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/search_deployment#project_id SearchDeployment#project_id}

---

##### `Specs`<sup>Required</sup> <a name="Specs" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.specs"></a>

```csharp
public object Specs { get; set; }
```

- *Type:* object

List of settings that configure the search nodes for your cluster.

This list is currently limited to defining a single element.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/search_deployment#specs SearchDeployment#specs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentConfig.property.timeouts"></a>

```csharp
public SearchDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeouts">SearchDeploymentTimeouts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/search_deployment#timeouts SearchDeployment#timeouts}.

---

### SearchDeploymentSpecs <a name="SearchDeploymentSpecs" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new SearchDeploymentSpecs {
    string InstanceSize,
    double NodeCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecs.property.instanceSize">InstanceSize</a></code> | <code>string</code> | Hardware specification for the search node instance sizes. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecs.property.nodeCount">NodeCount</a></code> | <code>double</code> | Number of search nodes in the cluster. |

---

##### `InstanceSize`<sup>Required</sup> <a name="InstanceSize" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecs.property.instanceSize"></a>

```csharp
public string InstanceSize { get; set; }
```

- *Type:* string

Hardware specification for the search node instance sizes.

The [MongoDB Atlas API](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Atlas-Search/operation/createAtlasSearchDeployment) describes the valid values. More details can also be found in the [Search Node Documentation](https://www.mongodb.com/docs/atlas/cluster-config/multi-cloud-distribution/#search-tier).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/search_deployment#instance_size SearchDeployment#instance_size}

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecs.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

Number of search nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/search_deployment#node_count SearchDeployment#node_count}

---

### SearchDeploymentTimeouts <a name="SearchDeploymentTimeouts" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new SearchDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/search_deployment#create SearchDeployment#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/search_deployment#delete SearchDeployment#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/search_deployment#update SearchDeployment#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SearchDeploymentSpecsList <a name="SearchDeploymentSpecsList" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new SearchDeploymentSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.get"></a>

```csharp
private SearchDeploymentSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SearchDeploymentSpecsOutputReference <a name="SearchDeploymentSpecsOutputReference" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new SearchDeploymentSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.instanceSizeInput">InstanceSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.instanceSize">InstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceSizeInput`<sup>Optional</sup> <a name="InstanceSizeInput" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.instanceSizeInput"></a>

```csharp
public string InstanceSizeInput { get; }
```

- *Type:* string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `InstanceSize`<sup>Required</sup> <a name="InstanceSize" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.instanceSize"></a>

```csharp
public string InstanceSize { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentSpecsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SearchDeploymentTimeoutsOutputReference <a name="SearchDeploymentTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new SearchDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.searchDeployment.SearchDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



