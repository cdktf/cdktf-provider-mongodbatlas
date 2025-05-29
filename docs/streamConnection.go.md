# `streamConnection` Submodule <a name="`streamConnection` Submodule" id="@cdktf/provider-mongodbatlas.streamConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamConnection <a name="StreamConnection" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection mongodbatlas_stream_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

streamconnection.NewStreamConnection(scope Construct, id *string, config StreamConnectionConfig) StreamConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig">StreamConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig">StreamConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putAws">PutAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putDbRoleToExecute">PutDbRoleToExecute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putNetworking">PutNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putSecurity">PutSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetAws">ResetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetBootstrapServers">ResetBootstrapServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetDbRoleToExecute">ResetDbRoleToExecute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetNetworking">ResetNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetSecurity">ResetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putAuthentication"></a>

```go
func PutAuthentication(value StreamConnectionAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication">StreamConnectionAuthentication</a>

---

##### `PutAws` <a name="PutAws" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putAws"></a>

```go
func PutAws(value StreamConnectionAws)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAws">StreamConnectionAws</a>

---

##### `PutDbRoleToExecute` <a name="PutDbRoleToExecute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putDbRoleToExecute"></a>

```go
func PutDbRoleToExecute(value StreamConnectionDbRoleToExecute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putDbRoleToExecute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute">StreamConnectionDbRoleToExecute</a>

---

##### `PutNetworking` <a name="PutNetworking" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putNetworking"></a>

```go
func PutNetworking(value StreamConnectionNetworking)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworking">StreamConnectionNetworking</a>

---

##### `PutSecurity` <a name="PutSecurity" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putSecurity"></a>

```go
func PutSecurity(value StreamConnectionSecurity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity">StreamConnectionSecurity</a>

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetAuthentication"></a>

```go
func ResetAuthentication()
```

##### `ResetAws` <a name="ResetAws" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetAws"></a>

```go
func ResetAws()
```

##### `ResetBootstrapServers` <a name="ResetBootstrapServers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetBootstrapServers"></a>

```go
func ResetBootstrapServers()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetDbRoleToExecute` <a name="ResetDbRoleToExecute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetDbRoleToExecute"></a>

```go
func ResetDbRoleToExecute()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetNetworking` <a name="ResetNetworking" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetNetworking"></a>

```go
func ResetNetworking()
```

##### `ResetSecurity` <a name="ResetSecurity" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetSecurity"></a>

```go
func ResetSecurity()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetUrl"></a>

```go
func ResetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

streamconnection.StreamConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

streamconnection.StreamConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

streamconnection.StreamConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

streamconnection.StreamConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StreamConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StreamConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StreamConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StreamConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference">StreamConnectionAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference">StreamConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.dbRoleToExecute">DbRoleToExecute</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference">StreamConnectionDbRoleToExecuteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference">StreamConnectionNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.security">Security</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference">StreamConnectionSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.authenticationInput">AuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.awsInput">AwsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.bootstrapServersInput">BootstrapServersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.configInput">ConfigInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.dbRoleToExecuteInput">DbRoleToExecuteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.networkingInput">NetworkingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.securityInput">SecurityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.bootstrapServers">BootstrapServers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.config">Config</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.authentication"></a>

```go
func Authentication() StreamConnectionAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference">StreamConnectionAuthenticationOutputReference</a>

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.aws"></a>

```go
func Aws() StreamConnectionAwsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference">StreamConnectionAwsOutputReference</a>

---

##### `DbRoleToExecute`<sup>Required</sup> <a name="DbRoleToExecute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.dbRoleToExecute"></a>

```go
func DbRoleToExecute() StreamConnectionDbRoleToExecuteOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference">StreamConnectionDbRoleToExecuteOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.networking"></a>

```go
func Networking() StreamConnectionNetworkingOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference">StreamConnectionNetworkingOutputReference</a>

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.security"></a>

```go
func Security() StreamConnectionSecurityOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference">StreamConnectionSecurityOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.authenticationInput"></a>

```go
func AuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.awsInput"></a>

```go
func AwsInput() interface{}
```

- *Type:* interface{}

---

##### `BootstrapServersInput`<sup>Optional</sup> <a name="BootstrapServersInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.bootstrapServersInput"></a>

```go
func BootstrapServersInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.configInput"></a>

```go
func ConfigInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `DbRoleToExecuteInput`<sup>Optional</sup> <a name="DbRoleToExecuteInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.dbRoleToExecuteInput"></a>

```go
func DbRoleToExecuteInput() interface{}
```

- *Type:* interface{}

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `NetworkingInput`<sup>Optional</sup> <a name="NetworkingInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.networkingInput"></a>

```go
func NetworkingInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.securityInput"></a>

```go
func SecurityInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.bootstrapServers"></a>

```go
func BootstrapServers() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.config"></a>

```go
func Config() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamConnectionAuthentication <a name="StreamConnectionAuthentication" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

&streamconnection.StreamConnectionAuthentication {
	Mechanism: *string,
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.property.mechanism">Mechanism</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#mechanism StreamConnection#mechanism}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#password StreamConnection#password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#username StreamConnection#username}. |

---

##### `Mechanism`<sup>Optional</sup> <a name="Mechanism" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.property.mechanism"></a>

```go
Mechanism *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#mechanism StreamConnection#mechanism}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#password StreamConnection#password}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#username StreamConnection#username}.

---

### StreamConnectionAws <a name="StreamConnectionAws" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAws.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

&streamconnection.StreamConnectionAws {
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAws.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#role_arn StreamConnection#role_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAws.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#role_arn StreamConnection#role_arn}.

---

### StreamConnectionConfig <a name="StreamConnectionConfig" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

&streamconnection.StreamConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionName: *string,
	InstanceName: *string,
	ProjectId: *string,
	Type: *string,
	Authentication: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7.streamConnection.StreamConnectionAuthentication,
	Aws: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7.streamConnection.StreamConnectionAws,
	BootstrapServers: *string,
	ClusterName: *string,
	Config: *map[string]*string,
	DbRoleToExecute: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7.streamConnection.StreamConnectionDbRoleToExecute,
	Headers: *map[string]*string,
	Networking: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7.streamConnection.StreamConnectionNetworking,
	Security: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7.streamConnection.StreamConnectionSecurity,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.connectionName">ConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#connection_name StreamConnection#connection_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.instanceName">InstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#instance_name StreamConnection#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#project_id StreamConnection#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#type StreamConnection#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication">StreamConnectionAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#authentication StreamConnection#authentication}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAws">StreamConnectionAws</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#aws StreamConnection#aws}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.bootstrapServers">BootstrapServers</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#bootstrap_servers StreamConnection#bootstrap_servers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#cluster_name StreamConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.config">Config</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#config StreamConnection#config}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.dbRoleToExecute">DbRoleToExecute</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute">StreamConnectionDbRoleToExecute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#db_role_to_execute StreamConnection#db_role_to_execute}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.headers">Headers</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#headers StreamConnection#headers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworking">StreamConnectionNetworking</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#networking StreamConnection#networking}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.security">Security</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity">StreamConnectionSecurity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#security StreamConnection#security}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#url StreamConnection#url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#connection_name StreamConnection#connection_name}.

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#instance_name StreamConnection#instance_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#project_id StreamConnection#project_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#type StreamConnection#type}.

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.authentication"></a>

```go
Authentication StreamConnectionAuthentication
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication">StreamConnectionAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#authentication StreamConnection#authentication}.

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.aws"></a>

```go
Aws StreamConnectionAws
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAws">StreamConnectionAws</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#aws StreamConnection#aws}.

---

##### `BootstrapServers`<sup>Optional</sup> <a name="BootstrapServers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.bootstrapServers"></a>

```go
BootstrapServers *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#bootstrap_servers StreamConnection#bootstrap_servers}.

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#cluster_name StreamConnection#cluster_name}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.config"></a>

```go
Config *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#config StreamConnection#config}.

---

##### `DbRoleToExecute`<sup>Optional</sup> <a name="DbRoleToExecute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.dbRoleToExecute"></a>

```go
DbRoleToExecute StreamConnectionDbRoleToExecute
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute">StreamConnectionDbRoleToExecute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#db_role_to_execute StreamConnection#db_role_to_execute}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#headers StreamConnection#headers}.

---

##### `Networking`<sup>Optional</sup> <a name="Networking" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.networking"></a>

```go
Networking StreamConnectionNetworking
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworking">StreamConnectionNetworking</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#networking StreamConnection#networking}.

---

##### `Security`<sup>Optional</sup> <a name="Security" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.security"></a>

```go
Security StreamConnectionSecurity
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity">StreamConnectionSecurity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#security StreamConnection#security}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#url StreamConnection#url}.

---

### StreamConnectionDbRoleToExecute <a name="StreamConnectionDbRoleToExecute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

&streamconnection.StreamConnectionDbRoleToExecute {
	Role: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#role StreamConnection#role}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#type StreamConnection#type}. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#role StreamConnection#role}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#type StreamConnection#type}.

---

### StreamConnectionNetworking <a name="StreamConnectionNetworking" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworking.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

&streamconnection.StreamConnectionNetworking {
	Access: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7.streamConnection.StreamConnectionNetworkingAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworking.property.access">Access</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccess">StreamConnectionNetworkingAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#access StreamConnection#access}. |

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworking.property.access"></a>

```go
Access StreamConnectionNetworkingAccess
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccess">StreamConnectionNetworkingAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#access StreamConnection#access}.

---

### StreamConnectionNetworkingAccess <a name="StreamConnectionNetworkingAccess" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

&streamconnection.StreamConnectionNetworkingAccess {
	Type: *string,
	ConnectionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccess.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#type StreamConnection#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccess.property.connectionId">ConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#connection_id StreamConnection#connection_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccess.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#type StreamConnection#type}.

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccess.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#connection_id StreamConnection#connection_id}.

---

### StreamConnectionSecurity <a name="StreamConnectionSecurity" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

&streamconnection.StreamConnectionSecurity {
	BrokerPublicCertificate: *string,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity.property.brokerPublicCertificate">BrokerPublicCertificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#broker_public_certificate StreamConnection#broker_public_certificate}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#protocol StreamConnection#protocol}. |

---

##### `BrokerPublicCertificate`<sup>Optional</sup> <a name="BrokerPublicCertificate" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity.property.brokerPublicCertificate"></a>

```go
BrokerPublicCertificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#broker_public_certificate StreamConnection#broker_public_certificate}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/resources/stream_connection#protocol StreamConnection#protocol}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamConnectionAuthenticationOutputReference <a name="StreamConnectionAuthenticationOutputReference" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

streamconnection.NewStreamConnectionAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamConnectionAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resetMechanism">ResetMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMechanism` <a name="ResetMechanism" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resetMechanism"></a>

```go
func ResetMechanism()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.mechanismInput">MechanismInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.mechanism">Mechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MechanismInput`<sup>Optional</sup> <a name="MechanismInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.mechanismInput"></a>

```go
func MechanismInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Mechanism`<sup>Required</sup> <a name="Mechanism" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.mechanism"></a>

```go
func Mechanism() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StreamConnectionAwsOutputReference <a name="StreamConnectionAwsOutputReference" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

streamconnection.NewStreamConnectionAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamConnectionAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StreamConnectionDbRoleToExecuteOutputReference <a name="StreamConnectionDbRoleToExecuteOutputReference" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

streamconnection.NewStreamConnectionDbRoleToExecuteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamConnectionDbRoleToExecuteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StreamConnectionNetworkingAccessOutputReference <a name="StreamConnectionNetworkingAccessOutputReference" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

streamconnection.NewStreamConnectionNetworkingAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamConnectionNetworkingAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.resetConnectionId">ResetConnectionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.resetConnectionId"></a>

```go
func ResetConnectionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccess">StreamConnectionNetworkingAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamConnectionNetworkingAccess
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccess">StreamConnectionNetworkingAccess</a>

---


### StreamConnectionNetworkingOutputReference <a name="StreamConnectionNetworkingOutputReference" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

streamconnection.NewStreamConnectionNetworkingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamConnectionNetworkingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.putAccess">PutAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccess` <a name="PutAccess" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.putAccess"></a>

```go
func PutAccess(value StreamConnectionNetworkingAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.putAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccess">StreamConnectionNetworkingAccess</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.property.access">Access</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference">StreamConnectionNetworkingAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.property.accessInput">AccessInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccess">StreamConnectionNetworkingAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.property.access"></a>

```go
func Access() StreamConnectionNetworkingAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccessOutputReference">StreamConnectionNetworkingAccessOutputReference</a>

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.property.accessInput"></a>

```go
func AccessInput() StreamConnectionNetworkingAccess
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingAccess">StreamConnectionNetworkingAccess</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionNetworkingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StreamConnectionSecurityOutputReference <a name="StreamConnectionSecurityOutputReference" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/streamconnection"

streamconnection.NewStreamConnectionSecurityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamConnectionSecurityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resetBrokerPublicCertificate">ResetBrokerPublicCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBrokerPublicCertificate` <a name="ResetBrokerPublicCertificate" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resetBrokerPublicCertificate"></a>

```go
func ResetBrokerPublicCertificate()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.brokerPublicCertificateInput">BrokerPublicCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.brokerPublicCertificate">BrokerPublicCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BrokerPublicCertificateInput`<sup>Optional</sup> <a name="BrokerPublicCertificateInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.brokerPublicCertificateInput"></a>

```go
func BrokerPublicCertificateInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `BrokerPublicCertificate`<sup>Required</sup> <a name="BrokerPublicCertificate" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.brokerPublicCertificate"></a>

```go
func BrokerPublicCertificate() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



