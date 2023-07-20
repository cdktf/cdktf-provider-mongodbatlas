# `mongodbatlas_network_peering`

Refer to the Terraform Registory for docs: [`mongodbatlas_network_peering`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering).

# `networkPeering` Submodule <a name="`networkPeering` Submodule" id="@cdktf/provider-mongodbatlas.networkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkPeering <a name="NetworkPeering" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering mongodbatlas_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new NetworkPeering(Construct Scope, string Id, NetworkPeeringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig">NetworkPeeringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig">NetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAccepterRegionName">ResetAccepterRegionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasCidrBlock">ResetAtlasCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasGcpProjectId">ResetAtlasGcpProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasVpcName">ResetAtlasVpcName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureDirectoryId">ResetAzureDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureSubscriptionId">ResetAzureSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetGcpProjectId">ResetGcpProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetNetworkName">ResetNetworkName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetRouteTableCidrBlock">ResetRouteTableCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVnetName">ResetVnetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccepterRegionName` <a name="ResetAccepterRegionName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAccepterRegionName"></a>

```csharp
private void ResetAccepterRegionName()
```

##### `ResetAtlasCidrBlock` <a name="ResetAtlasCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasCidrBlock"></a>

```csharp
private void ResetAtlasCidrBlock()
```

##### `ResetAtlasGcpProjectId` <a name="ResetAtlasGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasGcpProjectId"></a>

```csharp
private void ResetAtlasGcpProjectId()
```

##### `ResetAtlasVpcName` <a name="ResetAtlasVpcName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasVpcName"></a>

```csharp
private void ResetAtlasVpcName()
```

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetAzureDirectoryId` <a name="ResetAzureDirectoryId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureDirectoryId"></a>

```csharp
private void ResetAzureDirectoryId()
```

##### `ResetAzureSubscriptionId` <a name="ResetAzureSubscriptionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureSubscriptionId"></a>

```csharp
private void ResetAzureSubscriptionId()
```

##### `ResetGcpProjectId` <a name="ResetGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetGcpProjectId"></a>

```csharp
private void ResetGcpProjectId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetworkName` <a name="ResetNetworkName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetNetworkName"></a>

```csharp
private void ResetNetworkName()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetResourceGroupName"></a>

```csharp
private void ResetResourceGroupName()
```

##### `ResetRouteTableCidrBlock` <a name="ResetRouteTableCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetRouteTableCidrBlock"></a>

```csharp
private void ResetRouteTableCidrBlock()
```

##### `ResetVnetName` <a name="ResetVnetName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVnetName"></a>

```csharp
private void ResetVnetName()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

NetworkPeering.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

NetworkPeering.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

NetworkPeering.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasId">AtlasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorState">ErrorState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorStateName">ErrorStateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.peerId">PeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.statusName">StatusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionNameInput">AccepterRegionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlockInput">AtlasCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectIdInput">AtlasGcpProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcNameInput">AtlasVpcNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryIdInput">AzureDirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionIdInput">AzureSubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerIdInput">ContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectIdInput">GcpProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkNameInput">NetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerNameInput">ProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlockInput">RouteTableCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetNameInput">VnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionName">AccepterRegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlock">AtlasCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectId">AtlasGcpProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcName">AtlasVpcName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryId">AzureDirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionId">AzureSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerId">ContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectId">GcpProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkName">NetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlock">RouteTableCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetName">VnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AtlasId`<sup>Required</sup> <a name="AtlasId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasId"></a>

```csharp
public string AtlasId { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `ErrorState`<sup>Required</sup> <a name="ErrorState" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorState"></a>

```csharp
public string ErrorState { get; }
```

- *Type:* string

---

##### `ErrorStateName`<sup>Required</sup> <a name="ErrorStateName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorStateName"></a>

```csharp
public string ErrorStateName { get; }
```

- *Type:* string

---

##### `PeerId`<sup>Required</sup> <a name="PeerId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.peerId"></a>

```csharp
public string PeerId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusName`<sup>Required</sup> <a name="StatusName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.statusName"></a>

```csharp
public string StatusName { get; }
```

- *Type:* string

---

##### `AccepterRegionNameInput`<sup>Optional</sup> <a name="AccepterRegionNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionNameInput"></a>

```csharp
public string AccepterRegionNameInput { get; }
```

- *Type:* string

---

##### `AtlasCidrBlockInput`<sup>Optional</sup> <a name="AtlasCidrBlockInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlockInput"></a>

```csharp
public string AtlasCidrBlockInput { get; }
```

- *Type:* string

---

##### `AtlasGcpProjectIdInput`<sup>Optional</sup> <a name="AtlasGcpProjectIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectIdInput"></a>

```csharp
public string AtlasGcpProjectIdInput { get; }
```

- *Type:* string

---

##### `AtlasVpcNameInput`<sup>Optional</sup> <a name="AtlasVpcNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcNameInput"></a>

```csharp
public string AtlasVpcNameInput { get; }
```

- *Type:* string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `AzureDirectoryIdInput`<sup>Optional</sup> <a name="AzureDirectoryIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryIdInput"></a>

```csharp
public string AzureDirectoryIdInput { get; }
```

- *Type:* string

---

##### `AzureSubscriptionIdInput`<sup>Optional</sup> <a name="AzureSubscriptionIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionIdInput"></a>

```csharp
public string AzureSubscriptionIdInput { get; }
```

- *Type:* string

---

##### `ContainerIdInput`<sup>Optional</sup> <a name="ContainerIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerIdInput"></a>

```csharp
public string ContainerIdInput { get; }
```

- *Type:* string

---

##### `GcpProjectIdInput`<sup>Optional</sup> <a name="GcpProjectIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectIdInput"></a>

```csharp
public string GcpProjectIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkNameInput`<sup>Optional</sup> <a name="NetworkNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkNameInput"></a>

```csharp
public string NetworkNameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerNameInput"></a>

```csharp
public string ProviderNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RouteTableCidrBlockInput`<sup>Optional</sup> <a name="RouteTableCidrBlockInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlockInput"></a>

```csharp
public string RouteTableCidrBlockInput { get; }
```

- *Type:* string

---

##### `VnetNameInput`<sup>Optional</sup> <a name="VnetNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetNameInput"></a>

```csharp
public string VnetNameInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AccepterRegionName`<sup>Required</sup> <a name="AccepterRegionName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionName"></a>

```csharp
public string AccepterRegionName { get; }
```

- *Type:* string

---

##### `AtlasCidrBlock`<sup>Required</sup> <a name="AtlasCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlock"></a>

```csharp
public string AtlasCidrBlock { get; }
```

- *Type:* string

---

##### `AtlasGcpProjectId`<sup>Required</sup> <a name="AtlasGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectId"></a>

```csharp
public string AtlasGcpProjectId { get; }
```

- *Type:* string

---

##### `AtlasVpcName`<sup>Required</sup> <a name="AtlasVpcName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcName"></a>

```csharp
public string AtlasVpcName { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `AzureDirectoryId`<sup>Required</sup> <a name="AzureDirectoryId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryId"></a>

```csharp
public string AzureDirectoryId { get; }
```

- *Type:* string

---

##### `AzureSubscriptionId`<sup>Required</sup> <a name="AzureSubscriptionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionId"></a>

```csharp
public string AzureSubscriptionId { get; }
```

- *Type:* string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerId"></a>

```csharp
public string ContainerId { get; }
```

- *Type:* string

---

##### `GcpProjectId`<sup>Required</sup> <a name="GcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectId"></a>

```csharp
public string GcpProjectId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkName`<sup>Required</sup> <a name="NetworkName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkName"></a>

```csharp
public string NetworkName { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `RouteTableCidrBlock`<sup>Required</sup> <a name="RouteTableCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlock"></a>

```csharp
public string RouteTableCidrBlock { get; }
```

- *Type:* string

---

##### `VnetName`<sup>Required</sup> <a name="VnetName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetName"></a>

```csharp
public string VnetName { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkPeeringConfig <a name="NetworkPeeringConfig" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new NetworkPeeringConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContainerId,
    string ProjectId,
    string ProviderName,
    string AccepterRegionName = null,
    string AtlasCidrBlock = null,
    string AtlasGcpProjectId = null,
    string AtlasVpcName = null,
    string AwsAccountId = null,
    string AzureDirectoryId = null,
    string AzureSubscriptionId = null,
    string GcpProjectId = null,
    string Id = null,
    string NetworkName = null,
    string ResourceGroupName = null,
    string RouteTableCidrBlock = null,
    string VnetName = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.containerId">ContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#container_id NetworkPeering#container_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#project_id NetworkPeering#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.providerName">ProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#provider_name NetworkPeering#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.accepterRegionName">AccepterRegionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasCidrBlock">AtlasCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasGcpProjectId">AtlasGcpProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasVpcName">AtlasVpcName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureDirectoryId">AzureDirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureSubscriptionId">AzureSubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.gcpProjectId">GcpProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#id NetworkPeering#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.networkName">NetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#network_name NetworkPeering#network_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.routeTableCidrBlock">RouteTableCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vnetName">VnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.containerId"></a>

```csharp
public string ContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#container_id NetworkPeering#container_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#project_id NetworkPeering#project_id}.

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.providerName"></a>

```csharp
public string ProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#provider_name NetworkPeering#provider_name}.

---

##### `AccepterRegionName`<sup>Optional</sup> <a name="AccepterRegionName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.accepterRegionName"></a>

```csharp
public string AccepterRegionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}.

---

##### `AtlasCidrBlock`<sup>Optional</sup> <a name="AtlasCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasCidrBlock"></a>

```csharp
public string AtlasCidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}.

---

##### `AtlasGcpProjectId`<sup>Optional</sup> <a name="AtlasGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasGcpProjectId"></a>

```csharp
public string AtlasGcpProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}.

---

##### `AtlasVpcName`<sup>Optional</sup> <a name="AtlasVpcName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasVpcName"></a>

```csharp
public string AtlasVpcName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}.

---

##### `AzureDirectoryId`<sup>Optional</sup> <a name="AzureDirectoryId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureDirectoryId"></a>

```csharp
public string AzureDirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}.

---

##### `AzureSubscriptionId`<sup>Optional</sup> <a name="AzureSubscriptionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureSubscriptionId"></a>

```csharp
public string AzureSubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}.

---

##### `GcpProjectId`<sup>Optional</sup> <a name="GcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.gcpProjectId"></a>

```csharp
public string GcpProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#id NetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkName`<sup>Optional</sup> <a name="NetworkName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.networkName"></a>

```csharp
public string NetworkName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#network_name NetworkPeering#network_name}.

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}.

---

##### `RouteTableCidrBlock`<sup>Optional</sup> <a name="RouteTableCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.routeTableCidrBlock"></a>

```csharp
public string RouteTableCidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}.

---

##### `VnetName`<sup>Optional</sup> <a name="VnetName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vnetName"></a>

```csharp
public string VnetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}.

---



