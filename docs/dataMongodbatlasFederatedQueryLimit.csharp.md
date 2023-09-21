# `data_mongodbatlas_federated_query_limit`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_federated_query_limit`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit).

# `dataMongodbatlasFederatedQueryLimit` Submodule <a name="`dataMongodbatlasFederatedQueryLimit` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedQueryLimit <a name="DataMongodbatlasFederatedQueryLimit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit mongodbatlas_federated_query_limit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasFederatedQueryLimit(Construct Scope, string Id, DataMongodbatlasFederatedQueryLimitConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig">DataMongodbatlasFederatedQueryLimitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig">DataMongodbatlasFederatedQueryLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasFederatedQueryLimit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasFederatedQueryLimit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasFederatedQueryLimit.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.currentUsage">CurrentUsage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.defaultLimit">DefaultLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.lastModifiedDate">LastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.maximumLimit">MaximumLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.overrunPolicy">OverrunPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.limitNameInput">LimitNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tenantNameInput">TenantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.limitName">LimitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tenantName">TenantName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CurrentUsage`<sup>Required</sup> <a name="CurrentUsage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.currentUsage"></a>

```csharp
public double CurrentUsage { get; }
```

- *Type:* double

---

##### `DefaultLimit`<sup>Required</sup> <a name="DefaultLimit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.defaultLimit"></a>

```csharp
public double DefaultLimit { get; }
```

- *Type:* double

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.lastModifiedDate"></a>

```csharp
public string LastModifiedDate { get; }
```

- *Type:* string

---

##### `MaximumLimit`<sup>Required</sup> <a name="MaximumLimit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.maximumLimit"></a>

```csharp
public double MaximumLimit { get; }
```

- *Type:* double

---

##### `OverrunPolicy`<sup>Required</sup> <a name="OverrunPolicy" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.overrunPolicy"></a>

```csharp
public string OverrunPolicy { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitNameInput`<sup>Optional</sup> <a name="LimitNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.limitNameInput"></a>

```csharp
public string LimitNameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TenantNameInput`<sup>Optional</sup> <a name="TenantNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tenantNameInput"></a>

```csharp
public string TenantNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LimitName`<sup>Required</sup> <a name="LimitName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.limitName"></a>

```csharp
public string LimitName { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tenantName"></a>

```csharp
public string TenantName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedQueryLimitConfig <a name="DataMongodbatlasFederatedQueryLimitConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasFederatedQueryLimitConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LimitName,
    string ProjectId,
    string TenantName,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.limitName">LimitName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#limit_name DataMongodbatlasFederatedQueryLimit#limit_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#project_id DataMongodbatlasFederatedQueryLimit#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.tenantName">TenantName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#tenant_name DataMongodbatlasFederatedQueryLimit#tenant_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#id DataMongodbatlasFederatedQueryLimit#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LimitName`<sup>Required</sup> <a name="LimitName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.limitName"></a>

```csharp
public string LimitName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#limit_name DataMongodbatlasFederatedQueryLimit#limit_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#project_id DataMongodbatlasFederatedQueryLimit#project_id}.

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.tenantName"></a>

```csharp
public string TenantName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#tenant_name DataMongodbatlasFederatedQueryLimit#tenant_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedQueryLimit.DataMongodbatlasFederatedQueryLimitConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limit#id DataMongodbatlasFederatedQueryLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



