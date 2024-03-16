# `networkPeering` Submodule <a name="`networkPeering` Submodule" id="@cdktf/provider-mongodbatlas.networkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkPeering <a name="NetworkPeering" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering mongodbatlas_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/networkpeering"

networkpeering.NewNetworkPeering(scope Construct, id *string, config NetworkPeeringConfig) NetworkPeering
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig">NetworkPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig">NetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccepterRegionName` <a name="ResetAccepterRegionName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAccepterRegionName"></a>

```go
func ResetAccepterRegionName()
```

##### `ResetAtlasCidrBlock` <a name="ResetAtlasCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasCidrBlock"></a>

```go
func ResetAtlasCidrBlock()
```

##### `ResetAtlasGcpProjectId` <a name="ResetAtlasGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasGcpProjectId"></a>

```go
func ResetAtlasGcpProjectId()
```

##### `ResetAtlasVpcName` <a name="ResetAtlasVpcName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasVpcName"></a>

```go
func ResetAtlasVpcName()
```

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetAzureDirectoryId` <a name="ResetAzureDirectoryId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureDirectoryId"></a>

```go
func ResetAzureDirectoryId()
```

##### `ResetAzureSubscriptionId` <a name="ResetAzureSubscriptionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureSubscriptionId"></a>

```go
func ResetAzureSubscriptionId()
```

##### `ResetGcpProjectId` <a name="ResetGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetGcpProjectId"></a>

```go
func ResetGcpProjectId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkName` <a name="ResetNetworkName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetNetworkName"></a>

```go
func ResetNetworkName()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetResourceGroupName"></a>

```go
func ResetResourceGroupName()
```

##### `ResetRouteTableCidrBlock` <a name="ResetRouteTableCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetRouteTableCidrBlock"></a>

```go
func ResetRouteTableCidrBlock()
```

##### `ResetVnetName` <a name="ResetVnetName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVnetName"></a>

```go
func ResetVnetName()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVpcId"></a>

```go
func ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/networkpeering"

networkpeering.NetworkPeering_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/networkpeering"

networkpeering.NetworkPeering_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/networkpeering"

networkpeering.NetworkPeering_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/networkpeering"

networkpeering.NetworkPeering_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasId">AtlasId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorState">ErrorState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorStateName">ErrorStateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.peerId">PeerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.statusName">StatusName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionNameInput">AccepterRegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlockInput">AtlasCidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectIdInput">AtlasGcpProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcNameInput">AtlasVpcNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryIdInput">AzureDirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionIdInput">AzureSubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerIdInput">ContainerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectIdInput">GcpProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkNameInput">NetworkNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlockInput">RouteTableCidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetNameInput">VnetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionName">AccepterRegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlock">AtlasCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectId">AtlasGcpProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcName">AtlasVpcName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryId">AzureDirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionId">AzureSubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerId">ContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectId">GcpProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkName">NetworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlock">RouteTableCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetName">VnetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AtlasId`<sup>Required</sup> <a name="AtlasId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasId"></a>

```go
func AtlasId() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `ErrorState`<sup>Required</sup> <a name="ErrorState" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorState"></a>

```go
func ErrorState() *string
```

- *Type:* *string

---

##### `ErrorStateName`<sup>Required</sup> <a name="ErrorStateName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorStateName"></a>

```go
func ErrorStateName() *string
```

- *Type:* *string

---

##### `PeerId`<sup>Required</sup> <a name="PeerId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.peerId"></a>

```go
func PeerId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusName`<sup>Required</sup> <a name="StatusName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.statusName"></a>

```go
func StatusName() *string
```

- *Type:* *string

---

##### `AccepterRegionNameInput`<sup>Optional</sup> <a name="AccepterRegionNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionNameInput"></a>

```go
func AccepterRegionNameInput() *string
```

- *Type:* *string

---

##### `AtlasCidrBlockInput`<sup>Optional</sup> <a name="AtlasCidrBlockInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlockInput"></a>

```go
func AtlasCidrBlockInput() *string
```

- *Type:* *string

---

##### `AtlasGcpProjectIdInput`<sup>Optional</sup> <a name="AtlasGcpProjectIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectIdInput"></a>

```go
func AtlasGcpProjectIdInput() *string
```

- *Type:* *string

---

##### `AtlasVpcNameInput`<sup>Optional</sup> <a name="AtlasVpcNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcNameInput"></a>

```go
func AtlasVpcNameInput() *string
```

- *Type:* *string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `AzureDirectoryIdInput`<sup>Optional</sup> <a name="AzureDirectoryIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryIdInput"></a>

```go
func AzureDirectoryIdInput() *string
```

- *Type:* *string

---

##### `AzureSubscriptionIdInput`<sup>Optional</sup> <a name="AzureSubscriptionIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionIdInput"></a>

```go
func AzureSubscriptionIdInput() *string
```

- *Type:* *string

---

##### `ContainerIdInput`<sup>Optional</sup> <a name="ContainerIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerIdInput"></a>

```go
func ContainerIdInput() *string
```

- *Type:* *string

---

##### `GcpProjectIdInput`<sup>Optional</sup> <a name="GcpProjectIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectIdInput"></a>

```go
func GcpProjectIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkNameInput`<sup>Optional</sup> <a name="NetworkNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkNameInput"></a>

```go
func NetworkNameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RouteTableCidrBlockInput`<sup>Optional</sup> <a name="RouteTableCidrBlockInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlockInput"></a>

```go
func RouteTableCidrBlockInput() *string
```

- *Type:* *string

---

##### `VnetNameInput`<sup>Optional</sup> <a name="VnetNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetNameInput"></a>

```go
func VnetNameInput() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AccepterRegionName`<sup>Required</sup> <a name="AccepterRegionName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionName"></a>

```go
func AccepterRegionName() *string
```

- *Type:* *string

---

##### `AtlasCidrBlock`<sup>Required</sup> <a name="AtlasCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlock"></a>

```go
func AtlasCidrBlock() *string
```

- *Type:* *string

---

##### `AtlasGcpProjectId`<sup>Required</sup> <a name="AtlasGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectId"></a>

```go
func AtlasGcpProjectId() *string
```

- *Type:* *string

---

##### `AtlasVpcName`<sup>Required</sup> <a name="AtlasVpcName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcName"></a>

```go
func AtlasVpcName() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `AzureDirectoryId`<sup>Required</sup> <a name="AzureDirectoryId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryId"></a>

```go
func AzureDirectoryId() *string
```

- *Type:* *string

---

##### `AzureSubscriptionId`<sup>Required</sup> <a name="AzureSubscriptionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionId"></a>

```go
func AzureSubscriptionId() *string
```

- *Type:* *string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerId"></a>

```go
func ContainerId() *string
```

- *Type:* *string

---

##### `GcpProjectId`<sup>Required</sup> <a name="GcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectId"></a>

```go
func GcpProjectId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkName`<sup>Required</sup> <a name="NetworkName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkName"></a>

```go
func NetworkName() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `RouteTableCidrBlock`<sup>Required</sup> <a name="RouteTableCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlock"></a>

```go
func RouteTableCidrBlock() *string
```

- *Type:* *string

---

##### `VnetName`<sup>Required</sup> <a name="VnetName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetName"></a>

```go
func VnetName() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkPeeringConfig <a name="NetworkPeeringConfig" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/networkpeering"

&networkpeering.NetworkPeeringConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerId: *string,
	ProjectId: *string,
	ProviderName: *string,
	AccepterRegionName: *string,
	AtlasCidrBlock: *string,
	AtlasGcpProjectId: *string,
	AtlasVpcName: *string,
	AwsAccountId: *string,
	AzureDirectoryId: *string,
	AzureSubscriptionId: *string,
	GcpProjectId: *string,
	Id: *string,
	NetworkName: *string,
	ResourceGroupName: *string,
	RouteTableCidrBlock: *string,
	VnetName: *string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.containerId">ContainerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#container_id NetworkPeering#container_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#project_id NetworkPeering#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#provider_name NetworkPeering#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.accepterRegionName">AccepterRegionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasCidrBlock">AtlasCidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasGcpProjectId">AtlasGcpProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasVpcName">AtlasVpcName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureDirectoryId">AzureDirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureSubscriptionId">AzureSubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.gcpProjectId">GcpProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#id NetworkPeering#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.networkName">NetworkName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#network_name NetworkPeering#network_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.routeTableCidrBlock">RouteTableCidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vnetName">VnetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.containerId"></a>

```go
ContainerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#container_id NetworkPeering#container_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#project_id NetworkPeering#project_id}.

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#provider_name NetworkPeering#provider_name}.

---

##### `AccepterRegionName`<sup>Optional</sup> <a name="AccepterRegionName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.accepterRegionName"></a>

```go
AccepterRegionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}.

---

##### `AtlasCidrBlock`<sup>Optional</sup> <a name="AtlasCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasCidrBlock"></a>

```go
AtlasCidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}.

---

##### `AtlasGcpProjectId`<sup>Optional</sup> <a name="AtlasGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasGcpProjectId"></a>

```go
AtlasGcpProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}.

---

##### `AtlasVpcName`<sup>Optional</sup> <a name="AtlasVpcName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasVpcName"></a>

```go
AtlasVpcName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}.

---

##### `AzureDirectoryId`<sup>Optional</sup> <a name="AzureDirectoryId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureDirectoryId"></a>

```go
AzureDirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}.

---

##### `AzureSubscriptionId`<sup>Optional</sup> <a name="AzureSubscriptionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureSubscriptionId"></a>

```go
AzureSubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}.

---

##### `GcpProjectId`<sup>Optional</sup> <a name="GcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.gcpProjectId"></a>

```go
GcpProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#id NetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkName`<sup>Optional</sup> <a name="NetworkName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.networkName"></a>

```go
NetworkName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#network_name NetworkPeering#network_name}.

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}.

---

##### `RouteTableCidrBlock`<sup>Optional</sup> <a name="RouteTableCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.routeTableCidrBlock"></a>

```go
RouteTableCidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}.

---

##### `VnetName`<sup>Optional</sup> <a name="VnetName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vnetName"></a>

```go
VnetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}.

---



