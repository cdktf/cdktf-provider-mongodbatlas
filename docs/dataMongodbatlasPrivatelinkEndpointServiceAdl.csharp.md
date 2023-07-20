# `data_mongodbatlas_privatelink_endpoint_service_adl`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_privatelink_endpoint_service_adl`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/privatelink_endpoint_service_adl).

# `dataMongodbatlasPrivatelinkEndpointServiceAdl` Submodule <a name="`dataMongodbatlasPrivatelinkEndpointServiceAdl` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasPrivatelinkEndpointServiceAdl <a name="DataMongodbatlasPrivatelinkEndpointServiceAdl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/privatelink_endpoint_service_adl mongodbatlas_privatelink_endpoint_service_adl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasPrivatelinkEndpointServiceAdl(Construct Scope, string Id, DataMongodbatlasPrivatelinkEndpointServiceAdlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig">DataMongodbatlasPrivatelinkEndpointServiceAdlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig">DataMongodbatlasPrivatelinkEndpointServiceAdlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasPrivatelinkEndpointServiceAdl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasPrivatelinkEndpointServiceAdl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

DataMongodbatlasPrivatelinkEndpointServiceAdl.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasPrivatelinkEndpointServiceAdlConfig <a name="DataMongodbatlasPrivatelinkEndpointServiceAdlConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new DataMongodbatlasPrivatelinkEndpointServiceAdlConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EndpointId,
    string ProjectId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/privatelink_endpoint_service_adl#endpoint_id DataMongodbatlasPrivatelinkEndpointServiceAdl#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/privatelink_endpoint_service_adl#project_id DataMongodbatlasPrivatelinkEndpointServiceAdl#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/privatelink_endpoint_service_adl#id DataMongodbatlasPrivatelinkEndpointServiceAdl#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/privatelink_endpoint_service_adl#endpoint_id DataMongodbatlasPrivatelinkEndpointServiceAdl#endpoint_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/privatelink_endpoint_service_adl#project_id DataMongodbatlasPrivatelinkEndpointServiceAdl#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceAdl.DataMongodbatlasPrivatelinkEndpointServiceAdlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/privatelink_endpoint_service_adl#id DataMongodbatlasPrivatelinkEndpointServiceAdl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



