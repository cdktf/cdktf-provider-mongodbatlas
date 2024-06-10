# `thirdPartyIntegration` Submodule <a name="`thirdPartyIntegration` Submodule" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ThirdPartyIntegration <a name="ThirdPartyIntegration" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration mongodbatlas_third_party_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/thirdpartyintegration"

thirdpartyintegration.NewThirdPartyIntegration(scope Construct, id *string, config ThirdPartyIntegrationConfig) ThirdPartyIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig">ThirdPartyIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig">ThirdPartyIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetChannelName">ResetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetMicrosoftTeamsWebhookUrl">ResetMicrosoftTeamsWebhookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRoutingKey">ResetRoutingKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetScheme">ResetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceDiscovery">ResetServiceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceKey">ResetServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetTeamName">ResetTeamName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetChannelName"></a>

```go
func ResetChannelName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMicrosoftTeamsWebhookUrl` <a name="ResetMicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetMicrosoftTeamsWebhookUrl"></a>

```go
func ResetMicrosoftTeamsWebhookUrl()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRoutingKey` <a name="ResetRoutingKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRoutingKey"></a>

```go
func ResetRoutingKey()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetScheme"></a>

```go
func ResetScheme()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetServiceDiscovery` <a name="ResetServiceDiscovery" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceDiscovery"></a>

```go
func ResetServiceDiscovery()
```

##### `ResetServiceKey` <a name="ResetServiceKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceKey"></a>

```go
func ResetServiceKey()
```

##### `ResetTeamName` <a name="ResetTeamName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetTeamName"></a>

```go
func ResetTeamName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUserName"></a>

```go
func ResetUserName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ThirdPartyIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/thirdpartyintegration"

thirdpartyintegration.ThirdPartyIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/thirdpartyintegration"

thirdpartyintegration.ThirdPartyIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/thirdpartyintegration"

thirdpartyintegration.ThirdPartyIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/thirdpartyintegration"

thirdpartyintegration.ThirdPartyIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ThirdPartyIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ThirdPartyIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ThirdPartyIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ThirdPartyIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrlInput">MicrosoftTeamsWebhookUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKeyInput">RoutingKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscoveryInput">ServiceDiscoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKeyInput">ServiceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamNameInput">TeamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrl">MicrosoftTeamsWebhookUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKey">RoutingKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscovery">ServiceDiscovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamName">TeamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MicrosoftTeamsWebhookUrlInput`<sup>Optional</sup> <a name="MicrosoftTeamsWebhookUrlInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrlInput"></a>

```go
func MicrosoftTeamsWebhookUrlInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoutingKeyInput`<sup>Optional</sup> <a name="RoutingKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKeyInput"></a>

```go
func RoutingKeyInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `ServiceDiscoveryInput`<sup>Optional</sup> <a name="ServiceDiscoveryInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscoveryInput"></a>

```go
func ServiceDiscoveryInput() *string
```

- *Type:* *string

---

##### `ServiceKeyInput`<sup>Optional</sup> <a name="ServiceKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKeyInput"></a>

```go
func ServiceKeyInput() *string
```

- *Type:* *string

---

##### `TeamNameInput`<sup>Optional</sup> <a name="TeamNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamNameInput"></a>

```go
func TeamNameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `MicrosoftTeamsWebhookUrl`<sup>Required</sup> <a name="MicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrl"></a>

```go
func MicrosoftTeamsWebhookUrl() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoutingKey`<sup>Required</sup> <a name="RoutingKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKey"></a>

```go
func RoutingKey() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `ServiceDiscovery`<sup>Required</sup> <a name="ServiceDiscovery" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscovery"></a>

```go
func ServiceDiscovery() *string
```

- *Type:* *string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKey"></a>

```go
func ServiceKey() *string
```

- *Type:* *string

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamName"></a>

```go
func TeamName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ThirdPartyIntegrationConfig <a name="ThirdPartyIntegrationConfig" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/thirdpartyintegration"

&thirdpartyintegration.ThirdPartyIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	Type: *string,
	ApiKey: *string,
	ChannelName: *string,
	Enabled: interface{},
	MicrosoftTeamsWebhookUrl: *string,
	Password: *string,
	Region: *string,
	RoutingKey: *string,
	Scheme: *string,
	Secret: *string,
	ServiceDiscovery: *string,
	ServiceKey: *string,
	TeamName: *string,
	Url: *string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#project_id ThirdPartyIntegration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#type ThirdPartyIntegration#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.apiKey">ApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#api_key ThirdPartyIntegration#api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#channel_name ThirdPartyIntegration#channel_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#enabled ThirdPartyIntegration#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.microsoftTeamsWebhookUrl">MicrosoftTeamsWebhookUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#microsoft_teams_webhook_url ThirdPartyIntegration#microsoft_teams_webhook_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#password ThirdPartyIntegration#password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#region ThirdPartyIntegration#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.routingKey">RoutingKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#routing_key ThirdPartyIntegration#routing_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#scheme ThirdPartyIntegration#scheme}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.secret">Secret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#secret ThirdPartyIntegration#secret}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceDiscovery">ServiceDiscovery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#service_discovery ThirdPartyIntegration#service_discovery}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#service_key ThirdPartyIntegration#service_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.teamName">TeamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#team_name ThirdPartyIntegration#team_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#url ThirdPartyIntegration#url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#user_name ThirdPartyIntegration#user_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#project_id ThirdPartyIntegration#project_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#type ThirdPartyIntegration#type}.

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#api_key ThirdPartyIntegration#api_key}.

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#channel_name ThirdPartyIntegration#channel_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#enabled ThirdPartyIntegration#enabled}.

---

##### `MicrosoftTeamsWebhookUrl`<sup>Optional</sup> <a name="MicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.microsoftTeamsWebhookUrl"></a>

```go
MicrosoftTeamsWebhookUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#microsoft_teams_webhook_url ThirdPartyIntegration#microsoft_teams_webhook_url}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#password ThirdPartyIntegration#password}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#region ThirdPartyIntegration#region}.

---

##### `RoutingKey`<sup>Optional</sup> <a name="RoutingKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.routingKey"></a>

```go
RoutingKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#routing_key ThirdPartyIntegration#routing_key}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#scheme ThirdPartyIntegration#scheme}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#secret ThirdPartyIntegration#secret}.

---

##### `ServiceDiscovery`<sup>Optional</sup> <a name="ServiceDiscovery" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceDiscovery"></a>

```go
ServiceDiscovery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#service_discovery ThirdPartyIntegration#service_discovery}.

---

##### `ServiceKey`<sup>Optional</sup> <a name="ServiceKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceKey"></a>

```go
ServiceKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#service_key ThirdPartyIntegration#service_key}.

---

##### `TeamName`<sup>Optional</sup> <a name="TeamName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.teamName"></a>

```go
TeamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#team_name ThirdPartyIntegration#team_name}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#url ThirdPartyIntegration#url}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/third_party_integration#user_name ThirdPartyIntegration#user_name}.

---



